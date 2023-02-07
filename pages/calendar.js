import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from "@fullcalendar/list";
import { Box, Typography, Avatar, TextField, List, ListItem, ListItemText } from '@mui/material/'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Header from '../Components/Header'
import { formatDate } from '@fullcalendar/core'



function MyCalendar() {
    const theme = useTheme();
    const [currentEvent, setCurrentEvent] = useState([])
    // console.log(currentEvent)


    const handleDataClick = (selected) => {
        const title = prompt("please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,

            });
        }

    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete this event '${selected.event.title}' `)) {
            selected.event.remove();
        };
    };



    return (
        <Box>
            <Header title="Calendar" subtitle={"Full Calendar Interative Page"} ></Header>
            <Box display="flex" gap="30px">
                <Box flex="1 1 20%" backgroundColor="white" height="50vh" borderRedius="10px" p="10px">
                    <h2>Events</h2>
                    <List>
                        {currentEvent.map(event => {
                            <ListItem key={event.id} sx={{
                                height: "fit-content", weight: "100%", backgroundColor: "neutral.blue", color: "white", p: "10px", borderRedius: "10px"
                            }}>
                                <ListItemText primary={event.title} secondary={
                                    <Typography>
                                        {formatDate(event.start,
                                            { year: 'numeric', month: 'short', day: 'numeric' })}

                                    </Typography>
                                } />
                            </ListItem>

                        })}

                    </List>
                </Box>
                <Box flex="1 1 80%" >
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView="dayGridMonth"
                        weekends={false}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDataClick}
                        eventClick={handleEventClick}
                        eventSet={(events) => setCurrentEvent(events)}
                        initialEvents={[
                            { id: "1234", title: "all-day event", date: "2023-02-2" },
                            { id: "1734", title: "event work out", date: "2023-02-6" }

                        ]}

                    />
                </Box>
            </Box>
        </Box >
    )
}

export default MyCalendar