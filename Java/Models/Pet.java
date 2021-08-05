package Models;
public class Pet {
    
    private int id;
    private String name;
    private String urlPhoto;
    private Category category;
    private String status;

    public Pet(int id, String name, Category category, String status) {
    
        this.id = id;
        this.name = name;
        this.category = category;
        this.status = status;
    
    }

    public Pet(){

    }

    //Getters e setters 
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }


    
}//Fim classe
