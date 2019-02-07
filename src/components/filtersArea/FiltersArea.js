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

        const { sorter, fixed, onSorterChange } = this.props;

        const categoriesOptions = [{ key: 'AL', value: 'All', text: 'All Tags' }, { key: 'W', value: 'W', text: 'Web' }, { key: 'D', value: 'Design', text: 'Design' }]
        const sortOptions = [{ key: 'R', value: 'score', text: 'Rank' }, { key: 'MN', value: 'mentions', text: 'Mentions' }, { key: 'CL', value: 'claps', text: 'Claps' }]


        return (

            <div>

                <DesktopFiltersArea
                    fixed={fixed}
                    categories={categoriesOptions}
                    sortersOptions={sortOptions}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    onSorterChange={onSorterChange}
                    sorter={sorter} />
                <MobileFiltersArea
                    fixed={fixed}
                    categories={categoriesOptions}
                    sortersOptions={sortOptions}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    onSorterChange={onSorterChange}
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

        const { fixed, categories, sortersOptions, handleOpen, onSorterChange, sorter } = this.props;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <Container text textAlign='center' >
                    <DropdownModal />
                    <div className={"filtersAreaContainer " + "stickyFiltersDesktop " + (fixed ? "stickyFiltersFixed" : "StickyFiltersNoFixed")}>
                        <Header as='h4' className="filterItem">
                            <Icon name='filter' />
                            <Header.Content>
                                <Dropdown placeholder='All Tags' search defaultValue='All' selection options={categories} onClick={handleOpen} />
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


        const { fixed, categories, sortersOptions, handleOpen , onSorterChange, sorter} = this.props;


        return (
            <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} >
                {/* <Container > */}

                <Sticky context={contextRef}>

                    <div className={"filtersAreaContainer " + "stickyFiltersMobile " + (fixed ? "stickyFiltersFixed" : "")}>
                        <div>
                            <Icon name='filter' />
                            <Dropdown placeholder='All Tags' search defaultValue='All' selection options={categories} onClick={handleOpen} />
                        </div>
                        <div>
                            <Icon name='sort amount down' />
                            <Dropdown placeholder='Rank' placeholder={sorter} defaultValue={sorter} selection options={sortersOptions} closeOnChange onChange={onSorterChange}/>
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

    // state = { modalOpen: false }

    // handleOpen = () => this.setState({ modalOpen: true })

    // handleClose = () => this.setState({ modalOpen: false })


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

