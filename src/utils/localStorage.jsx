const employees = [
    {
        "id": 1,
        "email": "aarav.mehta@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile financial and sales data for the month.",
                "taskDate": "2025-03-12",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with the client.",
                "taskDate": "2025-03-14",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "riya.sharma@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design New Logo",
                "taskDescription": "Create a new branding logo for the company.",
                "taskDate": "2025-03-15",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan and execute a new campaign on Instagram.",
                "taskDate": "2025-03-18",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Product Launch Presentation",
                "taskDescription": "Prepare slides and script for the launch event.",
                "taskDate": "2025-03-20",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "kabir.verma@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Migration",
                "taskDescription": "Move existing data to a new database system.",
                "taskDate": "2025-03-25",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "ananya.iyer@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "HR Policy Review",
                "taskDescription": "Update policies based on new government guidelines.",
                "taskDate": "2025-03-22",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Interview Candidates",
                "taskDescription": "Conduct interviews for new hiring.",
                "taskDate": "2025-03-24",
                "category": "HR",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "vivaan.kapoor@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform security checks and update servers.",
                "taskDate": "2025-03-28",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "API Integration",
                "taskDescription": "Integrate third-party API into the system.",
                "taskDate": "2025-03-30",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "priya.nair@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Approve Budget",
                "taskDescription": "Review and approve the annual budget proposal.",
                "taskDate": "2025-04-01",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

