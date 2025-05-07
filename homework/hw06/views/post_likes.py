import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.like_post import LikePost
from models.post import Post
from views import get_authorized_user_ids, can_view_post
import flask_jwt_extended


class PostLikesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

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
                json.dumps({"Message": f"User not authorized to like post"}),
                mimetype="application/json",
                status=404,
            )

         #check for duplicates
        like = LikePost.query.filter(
            LikePost.post_id == post_id, LikePost.user_id == self.current_user.id
        ).first()
        if like is not None:
            return Response(
                json.dumps({"Message": f"Like already exists"}),
                mimetype="application/json",
                status=400,
            )

        new_like = LikePost(
            post_id = post_id,
            user_id=self.current_user.id,
        )

        db.session.add(new_like)
        db.session.commit()

        return Response(
            json.dumps(new_like.to_dict()),
            mimetype="application/json",
            status=201,
        )


class PostLikesDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        print(id)
        like = LikePost.query.get(id)

        if like is None:
            return Response(
                json.dumps({"Message": f"like id={id} not found"}),
                mimetype="application/json",
                status=404,
            )

        if like.user_id != self.current_user.id:
            return Response(
                json.dumps(
                    {"Message": f"This like id={id} is not the user's like"}
                ),
                mimetype="application/json",
                status=404,
            )

        LikePost.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps(
                {"message": f"like id={id} has been successfully deleted."}
            ),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        PostLikesListEndpoint,
        "/api/likes",
        "/api/likes/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        PostLikesDetailEndpoint,
        "/api/likes/<int:id>",
        "/api/likes/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
