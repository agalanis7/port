import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Education",
        tab3 = "Experience"

        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a>React.js <span> - Robust js Library</span></a>
                                                    Delight the user with reactive experiences.
                                                </li>
                                                <li>
                                                    <a>Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a>Interaction design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a>BS Finance <span> - 2006</span></a>
                                                    University of Maryland, College Park
                                                </li>
                                                <li>
                                                    <a>Structured Study Program<span> - 2017</span></a>
                                                    Hack Reactor, San Francisco, CA 
                                                </li>
                                                <li>
                                                    <a>Full Stack Web Development Program <span> - 2018</span></a>
                                                    Wyncode Academy, Miami, FL
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                            
                                    



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                           <li>
                                                   <a href="/portfolio-landing">Director of Technology<span> - SobeKick Gym</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/portfolio-landing">Software Engineer Intern<span> - Miami Dev Shop</span></a> 2018 - 2019
                                               </li>
                                               <li>
                                                   <a href="/portfolio-landing">Project Manager<span> - Daystar Contracting</span></a> 2011 - 2018
                                               </li>
                                               <li>
                                                   <a href="/portfolio-landing">Accountant<span> - Affinity Mortgage </span></a> 2006- 2011
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;