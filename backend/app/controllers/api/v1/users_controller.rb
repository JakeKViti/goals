class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        #binding.pry
        user = User.find_by(name: params[:_json])
        if user == nil
            user = User.create(name: params[:_json])
            user.save
        end
            render json: user
    end

    private

    def user_params
        params.require(:users).permit(
            :name
        )
    end
end
