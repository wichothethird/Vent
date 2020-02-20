function Ticket(JSONObject){
    this.id = JSONObject.ticketNum;
    this.lastModified = JSONObject.lastModified;
    this.stat = JSONObject.stat;
    this.dateCreate = JSONObject.dateCreate;
    this.lastModifiedBy = JSONObject.lastModifiedBy;
    this.createdby = JSONObject.createdby;
    this.targetPrice = JSONObject.targetPrice;
    this.price = JSONObject.price;
    this.totalInvestment = JSONObject.totalInvestment;
    this.image = JSONObject.image;
    this.condit = JSONObject.condit;
    this.description = JSONObject.description;
    this.priority = JSONObject.priority;
    this.type = JSONObject.type; 
    this.admin_id = JSONObject.admin_id; 
    this.product = JSONObject.product;
    this.service = JSONObject.service;
    this.profit_percent = JSONObject.profit_percent;
    this.category = JSONObject.category;
    this.issue = JSONObject.issue;
    this.customer_id = JSONObject.customer_id;
}

Ticket.prototype.printlist = function(){
    //make sure the path to the tickets is created as a route in your server
    return "<li><div class=ticket-container>"+ this.getImageContainer() + "<span>" +this.getDescriptionContaier() + this.getTicketNumContaier() + this.getCreatedByContaier() + this.getStatusContaier() + this.getPriorityContaier(this.priority) +"</span></div></li>";
} 



Ticket.prototype.getImageContainer = function(){
    return "<img src='/images/laptop.png' alt='/images/laptop.png' height='64' width='64'></img>"
}

Ticket.prototype.getStatusContaier = function(){
    return "<div id='status'>"+ this.stat +"</divs>";
}


Ticket.prototype.getTicketNumContaier = function(){
    return "<a href=/tickets/"+ this.id + ">"+ "Ticket ID: " + this.id +"</a>";
}

Ticket.prototype.getCreatedByContaier = function(){
    return "<div id='createdBy'>"+ this.createdby +"</div>";
}

Ticket.prototype.getPriorityContaier = function(num){
    if (num==1){return "<div id='priority'>Low</div>";}
    if (num==2){return "<div id='priority'>Medium</div>";}
    else{return "<div id='priority'>High</div>";}
}

Ticket.prototype.getDescriptionContaier = function(num){
    return "<div id='description'>"+ this.description +"</div>";
}