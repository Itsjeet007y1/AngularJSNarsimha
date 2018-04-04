package com.app.ajax;

public class Department {
	private int deptno;
	private String deptName;
	private String location;
	public int getDeptno() {
		return deptno;
	}
	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	//toString() method
	@Override
	public String toString() {
		return "Department [deptno=" + deptno + ", deptName=" + deptName + ", location=" + location + "]";
	}
}
