package Java.Models;

public class Admin extends User {

	public Admin() {

	}

	// Construtor com herança da classe User
	public Admin(int id, String username, String firstName, String lastName, String email, String password,
			String phone, int userStatus) {
		super(id, username, firstName, lastName, email, password, phone, userStatus);
	}

}// Fim classe
