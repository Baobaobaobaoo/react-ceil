import './home.scss';
import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { BulbOutlined, CommentOutlined } from '@ant-design/icons';

const Home = () => {
  const tabs = [
    {
      name: '关注',
      key: 1
    },
    {
      name: '推荐',
      key: 2
    },
    {
      name: '热榜',
      key: 3
    },
    {
      name: '视频',
      key: 4
    }
  ]

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setScrollY(scrollPosition);
    }
    window.addEventListener('scroll', handleScroll)

    console.log(111, scrollY)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })


  return (
    <div className='home'>
      <div className='header isFixed'>
        {scrollY < 160 ? (
          <>
            <div className='logo'>
              logo
            </div>
            <div className='inner'>
              <div className='left'>
                {tabs.map(tab => (
                  <div className='tab'>{tab.name}</div>
                ))}
              </div>
              <div className='center'>
                <Input placeholder="question" />
                <Button type="primary">提问</Button>
              </div>
              <div className='right'>
                <div className='info'>
                  <BulbOutlined />
                  <span>消息</span>
                </div>
                <div className='letter'>
                  <CommentOutlined />
                  <span>私信</span>
                </div>
                <div className='avatar'>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='show-title'>大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型大模型</div>
        )}

      </div>
      <div className='title-area'>
        <div className='left'>
          <div className='label'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='title'>大模型</div>
          <div className='footer'>
            <Button type="primary">关注问题</Button>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Home;