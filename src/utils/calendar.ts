import { invitationData } from "../data/invitationData";

function formatDate(date: Date) {
    return date
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";
}

export function downloadCalendar() {
    const event = invitationData.event;

    const start = formatDate(new Date(event.startDate));
    const end = formatDate(new Date(event.endDate));
    
    const address = event.address.join(", ");

    const content = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${start}
DTEND:${end}
LOCATION:${event.venue}, ${address}
DESCRIPTION: Majlis Perkahwinan Husnina & Ruzzidan
END:VEVENT
END:VCALENDAR`;

    const blob =  new Blob(
        [content],
        {
            type: "text/calendar;charset=utf-8",
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Majlis-Perkahwinan-Husnina-Ruzzidan.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}