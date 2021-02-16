class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    private

    def goal_params
        params.require(:problem).permit(
            :name
        )
    end
end
