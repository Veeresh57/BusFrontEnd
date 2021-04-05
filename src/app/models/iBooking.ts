export interface IBooking{
    TicketId :number;
    CustomerId:number;
    EmailId :string;
    MobileNumber:string;
    BusName:string;
    Start:string;
    Destination:string;
    DateOfJourney:Date;
    Seats:number;
    Bookingstatus:string;
    Travelstatus:string;
}