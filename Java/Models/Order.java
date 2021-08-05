package Models;
public class Order {
    
    private int id;
    private int petId;
    private int quantity;
    private String shipDate;
    private String status;


    public Order() {
    }

    public Order(int id, int petId, int quantity, String shipDate, String status) {
        this.id = id;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
    }


    //Getters e setters 
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getPetId() {
        return petId;
    }
    public void setPetId(int petId) {
        this.petId = petId;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getShipDate() {
        return shipDate;
    }
    public void setShipDate(String shipDate) {
        this.shipDate = shipDate;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }


}//Fim classe
