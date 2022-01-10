import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';
import {
  DislikeOutlined,
  HeartOutlined
} from '@ant-design/icons';

import Heart from './heart.png'

const Photo = ({ url, thumbnail_url, title, date, explanation, copyright}) => {

  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [showReaction, setReaction] = useState(false)

  const likeHandler = () =>{
    if (isLiked == false & isDisliked == true){
      setIsDisliked(!isDisliked)
    }
    if (isLiked==false){
      setReaction(true)
      setTimeout(() => {
        setReaction(false)
      }, 400);
    }
    setIsLiked(!isLiked)
  }
  const dislikeHandler = () =>{
    if (isDisliked == false & isLiked == true){
      setIsLiked(!isLiked)
    }
    setIsDisliked(!isDisliked)
  }


  return (
    <article className='DisplayPallete'>
      <img className='image' src={thumbnail_url || url} alt={{title}|| 'Title'} />
      <h4>{title}</h4>
      <p className='lessImpText' >{date} {isLiked}</p>
      {showReaction?(
      <img className='imageReaction'  src={Heart} alt={{title}|| 'Title'} />
      )
      :(
      <span className='explanation' >   <p className='regText'>{explanation}</p></span>
      )}
      <span className='buttonTray'>
        {isLiked? (<Tooltip title="Like">
        <Button onClick={likeHandler} className='reactionButton' type="primary" danger shape="circle" icon={<HeartOutlined />} size="large" />
      </Tooltip>)
        :(<Tooltip title="Like">
        <Button onClick={likeHandler} className='reactionButton' type="default" shape="circle" icon={<HeartOutlined />} size="large" />
      </Tooltip>)
        }
        {isDisliked? (<Tooltip title="Unlike">
        <Button onClick={dislikeHandler} className='reactionButton' type="primary" shape="circle" icon={<DislikeOutlined />} size="large" />
      </Tooltip>)
        :( <Tooltip title="Unlike">
        <Button onClick={dislikeHandler} className='reactionButton' type="default" shape="circle" icon={<DislikeOutlined />} size="large" />
      </Tooltip>)
        }       
      </span>
      <footer className='lessImpText footerStyle'>
        <small >&copy; Copyright: {copyright}</small>
      </footer>
    </article>
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  explanation: PropTypes.string,
  copyright: PropTypes.string,
};


export default Photo;