import React, { Component } from 'react';
import './FiltersArea.css';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import {
    Dropdown,
    Header,
    Icon,
    Container,
    Responsive,
    Sticky,
    Modal,
} from 'semantic-ui-react'


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class FiltersArea extends React.Component {


    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })




    render() {

        const { sorter, fixed, onSorterChange, onTagChange } = this.props;



        const categoriesOptions = [
            { value: 'All Tags', text: 'All Tags' },
            { value: 'Art', text: 'Art' },
            { value: 'Artificial Intelligence', text: 'Artificial Intelligence' },
            { value: 'Business', text: 'Business' },
            { value: 'Creativity', text: 'Creativity' },
            { value: 'Cryptocurrency', text: 'Cryptocurrency' },
            { value: 'Culture', text: 'Culture' },
            { value: 'Data Science', text: 'Data Science' },
            { value: 'Dating', text: 'Dating' },
            { value: 'Design', text: 'Design' },
            { value: 'Economics', text: 'Economics' },
            { value: 'Education', text: 'Education' },
            { value: 'Entrepreneurship', text: 'Entrepreneurship' },
            { value: 'Feminism', text: 'Feminism' },
            { value: 'Future', text: 'Future' },
            { value: 'Health', text: 'Health' },
            { value: 'History', text: 'History' },
            { value: 'Innovation', text: 'Innovation' },
            { value: 'Inspiration', text: 'Inspiration' },
            { value: 'Investing', text: 'Investing' },
            { value: 'Leadership', text: 'Leadership' },
            { value: 'Life Lessons', text: 'Life Lessons' },
            { value: 'Life', text: 'Life' },
            { value: 'Lifestyle', text: 'Lifestyle' },
            { value: 'Love', text: 'Love' },
            { value: 'Machine Learning', text: 'Machine Learning' },
            { value: 'Marketing', text: 'Marketing' },
            { value: 'Mental Health', text: 'Mental Health' },
            { value: 'Mindfulness', text: 'Mindfulness' },
            { value: 'Money', text: 'Money' },
            { value: 'Motivation', text: 'Motivation' },
            { value: 'Philosophy', text: 'Philosophy' },
            { value: 'Politics', text: 'Politics' },
            { value: 'Productivity', text: 'Productivity' },
            { value: 'Programming', text: 'Programming' },
            { value: 'Psychology', text: 'Psychology' },
            { value: 'Racism', text: 'Racism' },
            { value: 'Reading', text: 'Reading' },
            { value: 'Relationships', text: 'Relationships' },
            { value: 'Science', text: 'Science' },
            { value: 'Self Improvement', text: 'Self Improvement' },
            { value: 'Social Media', text: 'Social Media' },
            { value: 'Startup', text: 'Startup' },
            { value: 'Success', text: 'Success' },
            { value: 'Technology', text: 'Technology' },
            { value: 'User Experience', text: 'User Experience' },
            { value: 'Web Development', text: 'Web Development' },
            { value: 'Work', text: 'Work' },
            { value: 'Writing', text: 'Writing' }
        ]

        const sortOptions = [{ key: 'R', value: 'score', text: 'Rank' }, { key: 'MN', value: 'mentions', text: 'Mentions' }, { key: 'CL', value: 'claps', text: 'Claps' }]


        return (

            <div>

                <DesktopFiltersArea
                    fixed={fixed}
                    categories={categoriesOptions}
                    sortersOptions={sortOptions}
                    handleClose={this.handleClose}
                    onSorterChange={onSorterChange}
                    onTagChange={onTagChange}
                    sorter={sorter} />
                <MobileFiltersArea
                    fixed={fixed}
                    categories={categoriesOptions}
                    sortersOptions={sortOptions}
                    handleClose={this.handleClose}
                    onSorterChange={onSorterChange}
                    onTagChange={onTagChange}
                    sorter={sorter} />
                <DropdownModal
                    handleClose={this.handleClose}
                    modalState={this.state.modalOpen} />
            </div>

        )

    }
}


class DesktopFiltersArea extends Component {


    render() {

        const { fixed, categories, sortersOptions, onSorterChange, sorter, onTagChange } = this.props;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <Container text textAlign='center' >
                    <DropdownModal />
                    <div className={"filtersAreaContainer " + "stickyFiltersDesktop " + (fixed ? "stickyFiltersFixed" : "StickyFiltersNoFixed")}>
                        <Header as='h4' className="filterItem">
                            <Icon name='filter' />
                            <Header.Content>
                                <Dropdown placeholder='All Tags' search defaultValue='All Tags' selection options={categories} closeOnChange onChange={onTagChange}/>
                            </Header.Content>
                        </Header>

                        <Header as='h4' className="filterItem">
                            <Icon name='sort amount down' />
                            <Header.Content>
                                <Dropdown placeholder={sorter} defaultValue={sorter} selection options={sortersOptions} closeOnChange onChange={onSorterChange} />
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

    goToTop = () => {
        scroll.scrollToTop();
    }


    render() {

        const { contextRef } = this.state


        const { fixed, categories, sortersOptions, onSorterChange, sorter, onTagChange } = this.props;


        return (
            <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} >
                {/* <Container > */}

                <Sticky context={contextRef}>

                    <div className={"filtersAreaContainer " + "stickyFiltersMobile " + (fixed ? "stickyFiltersFixed" : "")}>
                        <div>
                            <Icon name='filter' />
                            <Dropdown placeholder='All Tags' search defaultValue='All' selection options={categories} closeOnChange onChange={onTagChange}/>
                        </div>
                        <div>
                            <Icon name='sort amount down' />
                            <Dropdown placeholder='Rank' placeholder={sorter} defaultValue={sorter} selection options={sortersOptions} closeOnChange onChange={onSorterChange} />
                        </div>

                        <Icon name='long arrow alternate up' size='large' className={"goToTopButton " + (fixed ? "" : "goToTopButtonHidden")} onClick={this.goToTop} />
                    </div>
                    {/* </Container> */}

                </Sticky>

            </Responsive>
        )
    }
}



class DropdownModal extends Component {



    render() {


        const { modalState, handleClose } = this.props;

        return (

            <Modal
                open={modalState}
                onClose={() => handleClose()}
                size='mini'
                closeIcon
            >
                <Modal.Header>Coming Soon!</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Header>I'm working on it right now :-)</Header>
                    </Modal.Description>
                </Modal.Content>
            </Modal>


        )
    }
}


export default FiltersArea;

