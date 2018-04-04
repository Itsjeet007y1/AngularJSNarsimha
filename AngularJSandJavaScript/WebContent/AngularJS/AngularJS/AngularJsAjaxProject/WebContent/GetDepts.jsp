<%@ page language="java"
	import="java.sql.*,java.util.*,com.app.ajax.*,com.google.gson.*"%>
	<%
		String Jdbc_Driver = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql:///test";
		String user = "root";
		String pass = "root";
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName(Jdbc_Driver);
			con = DriverManager.getConnection(DB_URL, user, pass);
			stmt = con.createStatement();
			//step(1)
			rs = stmt.executeQuery("select *from depts");
			ArrayList<Department> deptList = new ArrayList<Department>();
			while (rs.next()) {
				//step(2)
				Department dept = new Department();
				dept.setDeptno(rs.getInt(1));
				dept.setDeptName(rs.getString(2));
				dept.setLocation(rs.getString(3));
				deptList.add(dept);
			}
			//step(3)
			Gson gsonObj = new Gson();
			String gsonData = gsonObj.toJson(deptList);
			//step(4)
			response.setContentType("application/json");
			response.getWriter().write(gsonData);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			stmt.close();
			con.close();
		}
	%>