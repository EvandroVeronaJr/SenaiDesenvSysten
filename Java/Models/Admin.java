package Java.Models;

public class Admin extends User {

	private boolean isAdm;

	public Admin() {

	}

	// Construtor com herança da classe User
	public Admin(int id, String username, String firstName, String lastName, String email, String password,
			String phone, int userStatus, boolean isAdm) {
		super(id, username, firstName, lastName, email, password, phone, userStatus);
		this.isAdm = isAdm;
	}

	public boolean isAdm() {
		return isAdm;
	}

	public void setAdm(boolean isAdm) {
		this.isAdm = isAdm;
	}

}// Fim classe
