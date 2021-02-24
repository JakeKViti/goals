class Api::V1::GoalsController < ApplicationController
    def index
        goals = Goal.all
        render json: goals
    end

    def create
        goal = Goal.create(goal_params)
        render json: goal
    end

    #def show
    #    goal = Goal.find_by(id: params[:id])
    #    render json: goal
    #end

    def destroy
        #binding.pry
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
