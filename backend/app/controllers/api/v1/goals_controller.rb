class Api::V1::GoalsController < ApplicationController
    def index
        goals = Goal.all
        render json: goals
    end

    def create
        #binding.pry
        goal = Goal.create(goal_params)
        render json: goal
    end

    def destory
        goal = Goal.find(params[:id]).destroy
        render json: goal
    end

    private

    def goal_params
        params.require(:goals).permit(
            :title,
            :completed, 
            :user_id)
    end
end
