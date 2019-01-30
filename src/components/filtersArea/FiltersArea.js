import React, { Component } from 'react';
import './FiltersArea.css';

import {
    Dropdown,
    Header,
    Icon,
    Container,
    Responsive,
    Sidebar,
    Sticky,
    Segment
} from 'semantic-ui-react'


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class FiltersArea extends React.Component {




    render() {
        let fixed = this.props.fixed;
        const categoriesOptions = [{ key: 'AL', value: 'All', text: 'All Categories' }, { key: 'W', value: 'W', text: 'Web' }, { key: 'D', value: 'Design', text: 'Design' }]
        const sortOptions = [{ key: 'R', value: 'Rank', text: 'Rank' }, { key: 'MN', value: 'MN', text: 'Mentions' }, { key: 'CL', value: 'CL', text: 'Claps' }]


        return (

            <div>
                <DesktopFiltersArea fixed={fixed} categories={categoriesOptions} sorters={sortOptions} />
                <MobileFiltersArea fixed={fixed} categories={categoriesOptions} sorters={sortOptions} />
            </div>

        )

    }
}


class DesktopFiltersArea extends Component {


    render() {

        let fixed = this.props.fixed;
        let categories = this.props.categories;
        let sorters = this.props.sorters;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <Container text textAlign='center'>
                    <div className={"filtersAreaContainer " + "stickyFiltersFixedDesktop " + (fixed ? "stickyFiltersFixed" : "StickyFiltersNoFixed")}>
                        <Header as='h4' className="filterItem">
                            <Icon name='filter' />
                            <Header.Content>
                                <Dropdown placeholder='All Categories' search defaultValue='All' selection options={categories} />
                            </Header.Content>
                        </Header>

                        <Header as='h4' className="filterItem">
                            <Icon name='sort amount down' />
                            <Header.Content>
                                <Dropdown placeholder='Rank' defaultValue='Rank' selection options={sorters} />
                            </Header.Content>
                        </Header>
                    </div>
                </Container>

            </Responsive>
        )
    }
}


class MobileFiltersArea extends Component {

    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

    render() {

        const { contextRef } = this.state

        let fixed = this.props.fixed;
        let categories = this.props.categories;
        let sorters = this.props.sorters;

        return (
            <Responsive
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                {/* <Container > */}

                <Sticky context={contextRef}>


                    <div className={"filtersAreaContainer " + "stickyFiltersFixedMobile " + (fixed ? "stickyFiltersFixed" : "")}>
                        {/* <Header as='h6' > */}
                        <div>
                        <Icon name='filter'  />
                            {/* <Header.Content> */}
                            <Dropdown placeholder='All Categories' search defaultValue='All' selection options={categories} />
                            {/* </Header.Content> */}
                            {/* </Header> */}
                        </div>
                        <div>



                        {/* <Header as='h6' > */}
                        <Icon name='sort amount down'  />
                        {/* <Header.Content> */}
                        {/* <Dropdown placeholder='Rank' defaultValue='Rank' selection options={sorters} /> */}
                        <Dropdown placeholder='Rank' search defaultValue='Rank' selection options={sorters} />
                        {/* </Header.Content> */}
                        {/* </Header> */}
                        </div>
                        
                        {/* <Header as='h6' > */}
                        <Icon name='sort amount down' />
                        {/* </Header> */}
                    </div>
                    {/* </Container> */}

                </Sticky>

            </Responsive>
        )
    }
}


export default FiltersArea;

