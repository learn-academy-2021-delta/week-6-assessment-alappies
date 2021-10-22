# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb


class BlogPostsController < ApplicationController
  def index
  # ---1) This Blog post controller is the basically the App.js page, this is where you would write all the methods used in the app. this method is deffining the index page that will most likely host all the titles of the posts to this site and will serve as the home page. 
    @posts = BlogPost.all
  end

  def show
  # ---2) This is the method for the show page and this where the app will display a single instance of a post. 
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is the method for the "new" page. This page would usually have a form on it so the user of the app can add data input to create a new instance or post. 
  def new
    @post = Post.new
  end

  def create
    # ---5) This method will check the data input to make sure that the post is legitamate and that it meets the expectations put in place for a post, then it will store the data, and then it will redirect the user to the home page once the post has been submitted. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)This is the method on the blog controller page that will allow a user of this app to select a post and open up to another form page and edit the data.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is the the method that will allow the correction that was made by the user to be updated in the database and then it will redirect the user back to the home page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This is the method that will allow the user to select a post and then delete the post. And once they have deleted the post, it will direct them back to the home page. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This is used to make the exisiting classes private so no one can come in and hack you or steal your code, I think it's meant to hide string. 
  private
  def blog_post_params
    # ---10)This I believe is meant to require information to be input by the user. If they leave the feild empty, and error message will display.
    params.require(:blog_post).permit(:title, :content)
  end
end
