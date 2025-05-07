import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post
from views import get_authorized_user_ids, can_view_post
import flask_jwt_extended


class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def get(self):
        bookmarks = Bookmark.query.filter_by(user_id=self.current_user.id)

        data = [item.to_dict() for item in bookmarks.all()]
        return Response(
            json.dumps(data),
            mimetype="application/json",
            status=200,
        )

    @flask_jwt_extended.jwt_required()
    def post(self):
        data = request.json
        post_id = data.get("post_id")

        if not post_id:
            return Response(
                json.dumps({"message": "post_id is a required parameter"}),
                mimetype="application/json",
                status=400,
            )

        try:
            post_id = int(post_id)
        except:
            return Response(
                json.dumps(
                    {
                        "message": "The post id must be an integer"
                    }
                ),
                mimetype="application/json",
                status=400,
            )

        # check if post exists in the database
        post = Post.query.get(post_id)
        if post is None:
            return Response(
                json.dumps({"Message": f"Post id={post_id} not found"}),
                mimetype="application/json",
                status=404,
            )

        if not can_view_post(post_id, self.current_user):
            return Response(
                json.dumps({"Message": f"User not authorized to bookmark post"}),
                mimetype="application/json",
                status=404,
            )


        #check for duplicates
        bookmark = Bookmark.query.filter(
            Bookmark.post_id == post_id, Bookmark.user_id == self.current_user.id
        ).first()
        if bookmark is not None:
            return Response(
                json.dumps({"Message": f"Bookmark already exists"}),
                mimetype="application/json",
                status=400,
            )

        new_bookmark = Bookmark(
            post_id = post_id,
            user_id=self.current_user.id,
        )

        db.session.add(new_bookmark)
        db.session.commit()

        return Response(
            json.dumps(new_bookmark.to_dict()),
            mimetype="application/json",
            status=201,
        )


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        print(id)
        bookmark = Bookmark.query.get(id)

        if bookmark is None:
            return Response(
                json.dumps({"Message": f"Bookmark id={id} not found"}),
                mimetype="application/json",
                status=404,
            )

        if bookmark.user_id != self.current_user.id:
            return Response(
                json.dumps(
                    {"Message": f"This bookmark id={id} is not the user's bookmark"}
                ),
                mimetype="application/json",
                status=404,
            )

        Bookmark.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps(
                {"message": f"Bookmark id={id} has been successfully deleted."}
            ),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        BookmarksListEndpoint,
        "/api/bookmarks",
        "/api/bookmarks/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        BookmarkDetailEndpoint,
        "/api/bookmarks/<int:id>",
        "/api/bookmarks/<int:id>",
        resource_class_kwargs={"current_user": current_user},
    )
