import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import Table from './Table';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
                <TopBar/>
				<ContentRowTop/>
                <Table/>
			</div>
        <Footer/>
		</div>
    )
}

export default ContentWrapper;