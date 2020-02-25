import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Daystar Contracting Website',
        title: 'React.js',
        link: 'https://www.daystarcontracting.com'
    },
    {
        image: 'image-2',
        category: 'SobeKick Website',
        title: 'Wordpress',
        link: 'https://sobekick.com/'
    },
    {
        image: 'image-3',
        category: 'SobeKick Mobile App',
        title: 'Zype',
        link: 'https://apps.apple.com/us/app/sobekick-online/id1283346557'
    } 
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.link}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link}>View Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;