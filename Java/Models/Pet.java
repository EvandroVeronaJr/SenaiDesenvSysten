package Models;

import java.util.List;
import java.util.Set;

public class Pet {
    
    private int id;
    private String name;
    private Set<String> photoUrls;
    private List<Tag> tags;
    private Category category;
    private String status;

    public Pet(int id, String name, Category category, String status, Set<String> photoUrls, List<Tag> tags)  {
    
        this.id = id;
        this.name = name;
        this.category = category;
        this.status = status;
        this.photoUrls = photoUrls;
        this.tags = tags;
    
    }

    public Pet(){

    }

    //Getters e setters 

    public int getId() {
        return id;
    }
    
    
    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public Set<String> getPhotoUrls() {
        return photoUrls;
    }

    public void setPhotoUrls(Set<String> photoUrls) {
        this.photoUrls = photoUrls;
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
