import React from "react";


import { Carousel, } from 'antd';
import { createFromIconfontCN, } from '@ant-design/icons';








class Foot extends React.Component {

    state = {
        dotPosition: 'top',

    }



    render() {

        // for the icons
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
        });



        const { dotPosition } = this.state;










        return (
            <div>

                {/* take to make one for yourself */}
                <Carousel autoplay dotPosition={dotPosition}>
                    {/* start of the dev card  */}
                    <div class="card-container">

                        <img
                            class="Dev"
                            src="https://randomuser.me/api/portraits/women/79.jpg"
                            alt="user"


                        />
                        <h3><b>Tim Terry</b></h3>
                        <h2>Ohio</h2>
                        <p>
                            Casual Gamer and <br />
                               front-end developer
                         </p>
                        <p>
                            advent anime fan
                         </p>
                        <div class="media links">
                            <a href="https://www.twitter.com/" target="_blank"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/" target="_blank"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>
                        <div class="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    {/* end of the dev card */}







                </Carousel>
            </div>
        );
    }
}

export default Foot;

















