import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Button,
  Avatar,
  IconButton,
  Chip
} from "@mui/material";
import { style } from "@mui/system";
import { FaEnvelope, FaPhone, FaUserEdit } from "react-icons/fa";

interface newEmployee {
    id: string,
    name: string,
    department: string,
    availability: string,
    contact: { email: string, phone: string},
    profileImage: string
}

const tempEm = {
    id: "EMP000",
    name: "",
    department: "",
    availability: "",
    contact: { email: "", phone: "" },
    profileImage: ""
    };

interface color {
    [key: string] : string,
    available: string,
    partially_available: string,
    unavailable: string
}

interface StatusMap{
    [key: string] : string,
    available: string,
    partially_available: string,
    unavailable: string
}

// const StyledCard = styled(Card)(({ theme }) => ({
//   transition: "0.3s",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: theme.shadows
//   }
// }));

const styled = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  padding: "20px"
};

const mockEmployees = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "Engineering",
    availability: "available",
    contact: { email: "john@example.com", phone: "+1234567890" },
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "Marketing",
    availability: "partially_available",
    contact: { email: "jane@example.com", phone: "+1234567891" },
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Sales",
    availability: "unavailable",
    contact: { email: "mike@example.com", phone: "+1234567892" },
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

const EmployeeManagementList = () => {
  const [employees, setEmployees] = useState<newEmployee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState(tempEm);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAvailabilityChange = (employeeId: string) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        const statusMap: StatusMap = {
          available: "partially_available",
          partially_available: "unavailable",
          unavailable: "available"
        };
        const newStatus = statusMap[emp.availability]  || emp.availability;
        return { ...emp, availability: newStatus};
      }
      return emp;
    }));
  };

  const getStatusColor = (status: string) => {
    const colors: color = {
      available: "#4caf50",
      partially_available: "#ff9800",
      unavailable: "#f44336"
    };

    if(status in colors){
        return colors[status];
    }

  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || employee.department === departmentFilter;
    const matchesAvailability = availabilityFilter === "all" || employee.availability === availabilityFilter;
    return matchesSearch && matchesDepartment && matchesAvailability;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Employee Availability Management</Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid>
          <TextField
            fullWidth
            label="Search Employees"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              value={departmentFilter}
              label="Department"
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <MenuItem value="all">All Departments</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              value={availabilityFilter}
              label="Availability"
              onChange={(e) => setAvailabilityFilter(e.target.value)}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="partially_available">Partially Available</MenuItem>
              <MenuItem value="unavailable">Unavailable</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredEmployees.map((employee) => (
          <Grid key={employee.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={employee.profileImage}
                    alt={employee.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{employee.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {employee.department}
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                  <Chip
                    label={employee.availability.replace("_", " ")}
                    sx={{
                      bgcolor: getStatusColor(employee.availability),
                      color: "white"
                    }}
                  />
                  <Switch
                    checked={employee.availability === "available"}
                    onChange={() => handleAvailabilityChange(employee.id)}
                  />
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <IconButton
                    onClick={() => window.location.href = `mailto:${employee.contact.email}`}
                  >
                    <FaEnvelope />
                  </IconButton>
                  <IconButton
                    onClick={() => window.location.href = `tel:${employee.contact.phone}`}
                  >
                    <FaPhone />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setSelectedEmployee(employee);
                      setModalOpen(true);
                    }}
                  >
                    <FaUserEdit />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="employee-details-modal"
      >
        <Box>
          {selectedEmployee && (
            <Box>
              <Typography variant="h5" gutterBottom>Employee Details</Typography>
              <Grid container spacing={2}>
                <Grid>
                  <Avatar
                    src={selectedEmployee.profileImage}
                    alt={selectedEmployee.name}
                    sx={{ width: 120, height: 120, mb: 2 }}
                  />
                </Grid>
                <Grid>
                  <Typography variant="h6">{selectedEmployee.name}</Typography>
                  <Typography>ID: {selectedEmployee.id}</Typography>
                  <Typography>Department: {selectedEmployee.department}</Typography>
                  <Typography>Email: {selectedEmployee.contact.email}</Typography>
                  <Typography>Phone: {selectedEmployee.contact.phone}</Typography>
                </Grid>
              </Grid>
              <Box mt={3} display="flex" justifyContent="flex-end">
                <Button variant="contained" onClick={() => setModalOpen(false)}>Close</Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default EmployeeManagementList;