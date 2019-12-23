import React from 'react';
import styled from 'styled-components';

const itinerary = [
    {
        date: 'Sunday, December 22',
        location: 'Vienna, Imperial Riding School Renaissance Hotel',
        items: [
            "11:15 am - Carmen, Todd, Carolyn, Mike, Annie & Emma arrive in Vienna",
            "TBD - Katie arrives in Vienna",
            "Check into hotel: Imperial Riding School Renaissance",
            "Lunch - on your own",
            "Dinner - on your own",
        ]
    },
    {
        date: 'Monday, December 23',
        location: 'Vienna, Imperial Riding School Renaissance Hotel',
        items: [
            "Breakfast - on your own",
            'Lunch - on your own',
            'Dinner - on your own',
        ]
    },
    {
        date: 'Tuesday, December 24 (Christmas Eve)',
        location: 'Salzburg: Wyndham Grand Salzburg',
        items: [
            'Breakfast - on your own',
            'Carmen, Todd, Katie, Carolyn, Mike, Annie, & Emma check out of Imperial Riding School Renaissance',
            'Greens take train to Salzburg  (approx 2.5 hrs)',
            'Check into hotel: Wyndham Grand Salzburg',
            'Lunch - on your own',
            '1:40 pm - Joan, Trevor, & Julia arrive in Salzburg',
            '3:00 pm - Saccomannos to Silent Night Chapel Tour (anyone is welcome to book tickets)',
            '5:35 pm - Cynthia & Cory arrive in Salzburg',
            'Dinner - on your own'
        ]
    },
    {
        date: 'Wednesday, December 25 (Christmas Day)',
        location: 'Salzburg: Wyndham Grand Salzburg',
        items: [
            '6:00 am - Emmy, James, Elliot, and Issac arrive in Munich',
            'Breakfast: on your own',
            '8:30 am - Depart Wyndham Grand on tour bus',
            'Lunch: group lunch in Unken',
            '6:00 pm - Return to the Wyndham Grand',
            'Dinner: group Christmas dinner at Wyndham Grand'
        ]
    },
    {
        date: 'Thursday, December 26 (Wedding Rehearsal Day)',
        location: 'Salzburg: Wyndham Grand Salzburg',
        items: [
            'Breakfast: on your own',
            '8:45 am - Jeff, Kari, & Anna arrive in Vienna, travel to Salzburg',
            'Lunch: on your own',
            'Syd & Bart arrive in Salzburg',
            '4:00 pm - Wedding Rehearsal, dinner to follow at St. Peter Stiftskeller'
        ]
    },
    {
        date: 'Friday, December 27 (Matthew & Alma’s Wedding)',
        location: 'Salzburg: Wyndham Grand Salzburg',
        items: [
            'Breakfast - bridal party in bridal suite - Hotel Stein, everyone else on your own',
            '7 am - 12 pm - makeup & hair appointments',
            'Lunch - bridal party in bridal suite - Hotel Stein, everyone else on your own',
            '2:00 pm - pictures - Hotel Sacher, carriage rides/cabs to venue afterwards',
            '5:00 pm - wedding ceremony - St. Peter Stiftskeller, Hayden Hall',
            'Dinner at wedding reception - St. Peter Stiftskeller, Baroque Hall (childcare provided)'
        ]
    },
    {
        date: 'Saturday, December 28 (Katie’s 30th Birthday)',
        location: 'Salzburg: Wyndham Grand Salzburg',
        items: [
            'Breakfast - on your own, Matthew & Alma may have an optional open house style brunch at Tomaselli',
            'TBD - “kids” spa outing - Hotel Schloss Monchstein',
            'Lunch - on your own',
            'Dinner - group birthday dinner at Hotel Sacher restaurant, drinks to follow in Hotel Sacher lounge bar (cocktail/dressy attire)'
        ]
    },
    {
        date: 'Sunday, December 29',
        location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
        items: [
            'Breakfast - on your own',
            'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Wyndham Grand Salzburg',
            'TBD - Train to Bad Reichenhall (approx. 30 min)',
            'TBD - Check in to hotel: Avalon Hotel Bad Reichenhall',
            'Lunch - on your own',
            'Dinner - on your own'
        ]
    },
    {
        date: 'Monday, December 30',
        location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
        items: [
            'Breakfast - on your own',
            '10:50 am - Cynthia & Cory depart Salzburg for home',
            'Lunch - on your own',
            'Dinner - on your own'
        ]
    },
    {
        date: 'Tuesday, December 31',
        location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
        items: [
            'TBD - Emmy, James, Elliot, & Isaac depart Salzburg for Vienna',
            'Breakfast - on your own',
            'Lunch - on your own',
            'Dinner - on your own'
        ]
    },
    {
        date: 'Wednesday, January 1',
        location: 'Vienna: Moxy Hotel',
        items: [
            'Breakfast - on your own',
            'Lunch - on your own',
            'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Avalon Bad Reichenhall',
            'TBD - Train to Vienna',
            'Check into hotel: hotel near Vienna airport',
            'Dinner - on your own (Emmy & James are also in Vienna this evening)'
        ]
    },
    {
        date: 'Thursday, January 2',
        location: 'Going home',
        items: [
            '6:15 am - Carmen, Todd, Carolyn, Mike, Annie, & Emma depart Vienna for home',
            '10:10 am - Jeff, Kari, & Anna depart Vienna for home',
            '10: 40 am - Joan, Trevor, & Julia depart Vienna for home'
        ]
    }
];

const StyledLocation = styled.div`
    text-align: center;
`;

const StyledDate = styled.div`
    margin-bottom: 8px;
    text-align: center;
`;

const StyledItemBlock = styled.div`
    text-align: center;
    margin-top: 16px;
`;

const StyledLine = styled.div`
    width: 100px;
    border-bottom: 1px solid black;
`

const StyledLineWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`

const Line = () => (
    <StyledLineWrapper>
        <StyledLine />
    </StyledLineWrapper>
);

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
        }
    }

    render() {
        return (
            <div>
                {itinerary.map(day => {
                    const items = day.items.map(item => <div>{item}</div>);
                    return (
                        <>
                            <StyledDate>{day.date}</StyledDate>
                            <StyledLocation>{day.location}</StyledLocation>
                            <StyledItemBlock>
                                {items}
                            </StyledItemBlock>
                            <Line />
                        </>
                    )
                })}
            </div>
        )
    }
}
