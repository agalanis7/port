import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Education & Certification",
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
                                           {/* <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul> */}
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/portfolio-landing">Software Engineer Intern<span> - Miami Dev Shop</span></a> 2018 - 2019
                                               </li>
                                               <li>
                                                   <a href="/portfolio-landing">Front-end Engineer<span> - Daystar Contracting</span></a> 2010 - 2018
                                               </li>
                                               <li>
                                                   <a href="/portfolio-landing">Accountant<span> - Affinity Mortgage </span></a> 2006- 2010
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009
                                               </li>
                                               <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
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