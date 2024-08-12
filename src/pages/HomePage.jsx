import { useState } from 'react';

import AtlysModal from 'src/components/AtlysModal';
import Card from 'src/components/Card';
import Login from '../components/Login';
import Register from 'src/components/Register';

import { posts } from 'src/data/userPosts';

import commentIcon from 'src/assets/comment.svg';
import moreMenuIcon from 'src/assets/more_menu.svg';

const HomePage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const loggedInUser = sessionStorage.getItem('loggedInUser') || null;

  const user = loggedInUser?.username;
  const userName = user ? user.charAt(0).toUpperCase() + user.slice(1) : '';

  const handlePostChange = (e) => {
    e.preventDefault();
    setNewPost(e.target.value);
  };

  const handleNewPost = () => {
    if (!loggedInUser) {
      setShowAuthModal((prev) => !prev);
    }
  };

  const renderAuthChild = () => {
    if (showLogin) {
      return <Login setShowLogin={setShowLogin} />;
    }
    return <Register setShowLogin={setShowLogin} />;
  };

  return (
    <div className='flex flex-col my-[69px] mx-auto w-full items-center'>
      <div className='flex flex-col gap-10'>
        <div className='w-full max-w-[580px]'>
          <h1 className='mb-3 text-h1 font-medium text-gray-light leading-none'>
            Hello {userName}
          </h1>
          <p className='text-gray-medium leading-6'>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>

        <div className='flex flex-col max-w-[700px] gap-4'>
          <Card>
            <span className='text-lg font-medium text-gray-light'>
              Create post
            </span>
            <div className='flex cursor-text items-center gap-4 p-4 bg-charcoal rounded-lg max-w-[660px]'>
              <div className='flex items-center justify-center rounded-full bg-charcoal-light min-h-12 min-w-12'>
                💬
              </div>

              <input
                type='textfield'
                className='p-3 w-full text-gray-light !bg-charcoal outline-none placeholder:font-light
               placeholder:text-gray-medium'
                value={newPost}
                onChange={handlePostChange}
                placeholder='How are you feeling today?'
              />
            </div>

            <div className='w-full flex justify-end'>
              <div
                onClick={handleNewPost}
                className='rounded bg-blue-light py-3 px-[38px] cursor-pointer text-center text-white leading-none outline-none hover:bg-blue-light/80 focus:bg-blue-light/80 disabled:cursor-not-allowed disabled:bg-blue-light/50'
              >
                Post
              </div>
            </div>
          </Card>

          <div className='flex flex-col gap-4'>
            {posts.map((post) => {
              return (
                <Card key={post.id}>
                  <div className='flex flex-col'>
                    <div className='mb-5 flex items-center justify-between'>
                      <div className='flex'>
                        <img src={post.profilePic} className='mr-2' />
                        <div className='flex flex-col gap-1'>
                          <span className='text-gray-light'>
                            {post.username}
                          </span>
                          <p className='text-gray-medium text-sm'>
                            {post.createdAt}
                            {post.isEdited && <> • Edited</>}
                          </p>
                        </div>
                      </div>

                      <div>
                        <img src={moreMenuIcon} alt='more-menu' />
                      </div>
                    </div>

                    <div className='mb-[14px] flex cursor-text items-center gap-4 p-4 bg-charcoal rounded-lg max-w-[660px]'>
                      <div className='h-full flex flex-col justify-start'>
                        <div className='flex items-center justify-center rounded-full bg-charcoal-light min-h-12 min-w-12'>
                          {post.emoji}
                        </div>
                      </div>

                      <div className='text-gray-medium'>{post.text}</div>
                    </div>

                    <div className='flex items-center gap-2'>
                      <img src={commentIcon} alt='comment' />
                      <span className='text-sm text-gray-medium'>
                        {post?.noOfComments || 0} comments
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {showAuthModal && (
        <AtlysModal setShowAuthModal={setShowAuthModal}>
          {renderAuthChild()}
        </AtlysModal>
      )}
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
