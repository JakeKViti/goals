class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
       # binding.pry
        user = User.find_by(name: params[:users][:name])
        if user == nil
            user = User.create(user_params)
            user.save
            render json: user
        else
            redirect_to "/api/v1/users/#{user.id}"
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    private

    def user_params
        params.require(:users).permit(
            :name
        )
    end
end
