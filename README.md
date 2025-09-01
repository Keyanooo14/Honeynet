# 🍯 HoneyVision - Advanced Cybersecurity Honeynet Dashboard

<div align="center">

![HoneyVision Logo](honeyvision-dash/public/honey-logo.svg)

**Real-time Cybersecurity Honeynet Monitoring & Threat Intelligence Platform**

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg)](https://typescriptlang.org)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000.svg)](https://flask.palletsprojects.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8.svg)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e.svg)](https://supabase.com)

*Advanced honeypot deployment with real-time monitoring, threat analysis, and comprehensive security dashboard*

</div>

---

## 📋 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [🎯 Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🔧 Technology Stack](#-technology-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- [🍯 Honeypot Types](#-honeypot-types)
- [📊 Dashboard Components](#-dashboard-components)
- [🔌 API Endpoints](#-api-endpoints)
- [🗄️ Database Schema](#️-database-schema)
- [🚀 Deployment](#-deployment)
- [🔒 Security Features](#-security-features)
- [📈 Monitoring & Analytics](#-monitoring--analytics)
- [🛠️ Development](#️-development)
- [🧪 Testing](#-testing)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Project Overview

**HoneyVision** is a comprehensive cybersecurity honeynet platform that combines multiple honeypot technologies with real-time monitoring and advanced threat intelligence. The system is designed to attract, capture, and analyze malicious activities while providing security professionals with actionable insights through an intuitive dashboard.

### 🎯 **Mission Statement**
To create the most attractive and effective honeypot ecosystem that lures cyber attackers while providing comprehensive monitoring, analysis, and threat intelligence capabilities.

### 🌟 **What Makes HoneyVision Special**
- **Multi-Protocol Honeypots**: SSH, Web, FTP, Telnet, MySQL, and Redis
- **Real-Time Monitoring**: Live threat detection and alerting
- **Advanced Analytics**: Comprehensive attack pattern analysis
- **Professional Dashboard**: Modern, responsive web interface
- **Scalable Architecture**: Built for enterprise deployment
- **Attractive Interfaces**: Designed to lure sophisticated attackers

---

## 🎯 Key Features

### 🔥 **Core Capabilities**
- **Real-Time Threat Detection**: Instant notification of suspicious activities
- **Multi-Protocol Support**: Comprehensive coverage of common attack vectors
- **Live Data Visualization**: Dynamic charts, maps, and metrics
- **Automated Alerting**: Intelligent threat classification and prioritization
- **Data Persistence**: Secure storage with Supabase PostgreSQL
- **Reset Functionality**: Easy data cleanup and system reset

### 🎣 **Honeypot Attraction Features**
- **Realistic Interfaces**: Authentic-looking services that attract hackers
- **Fake Credentials**: Common default passwords and usernames
- **Vulnerable Appearances**: Services that appear exploitable
- **Realistic Responses**: Authentic protocol implementations
- **Fake Data**: Convincing file structures and databases

### 📊 **Analytics & Intelligence**
- **Attack Pattern Analysis**: Identify recurring threat patterns
- **Geographic Mapping**: Visualize attack origins worldwide
- **Timeline Analysis**: Track attack frequency and trends
- **Threat Classification**: Categorize attacks by severity and type
- **Performance Metrics**: Monitor honeypot effectiveness

---

## 🏗️ Architecture

### **System Overview**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React)       │◄──►│   (Flask)       │◄──►│  (Supabase)     │
│   Dashboard     │    │   API Server    │    │  PostgreSQL     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Honeypots     │    │   Data Store    │    │   Log Manager   │
│   (Multiple)    │    │   (SQLAlchemy)  │    │   (Structured)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Component Architecture**
- **Frontend Layer**: React-based dashboard with real-time updates
- **API Layer**: RESTful Flask API with comprehensive endpoints
- **Honeypot Layer**: Multiple protocol implementations
- **Data Layer**: SQLAlchemy ORM with Supabase PostgreSQL
- **Monitoring Layer**: Real-time logging and alerting system

---

## 🔧 Technology Stack

### **Backend Technologies**
- **Python 3.8+**: Core programming language
- **Flask 2.0+**: Web framework for API server
- **SQLAlchemy 2.0+**: Database ORM and management
- **Twisted**: Asynchronous networking framework
- **Threading**: Multi-threaded honeypot management
- **Socket Programming**: Low-level network communication

### **Frontend Technologies**
- **React 18**: Modern UI framework
- **TypeScript 5.0+**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS 3.0+**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Recharts**: Data visualization library
- **React Query**: Server state management

### **Database & Infrastructure**
- **Supabase**: Managed PostgreSQL database
- **PostgreSQL**: Primary database system
- **Redis**: Caching and session storage (optional)
- **Docker**: Containerization support
- **Nginx**: Reverse proxy (production)

### **Development Tools**
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality control
- **TypeScript**: Static type checking
- **Vite**: Development server and build tool

---

## 📁 Project Structure

```
HoneyVision/
├── 🍯 cybersecurity-honeynet/          # Backend honeynet system
│   ├── 📁 src/                         # Source code
│   │   ├── 📁 api/                     # API endpoints and routes
│   │   ├── 📁 honeypots/               # Honeypot implementations
│   │   │   ├── 🐝 ssh_honeypot.py      # SSH honeypot service
│   │   │   ├── 🌐 web_honeypot.py      # Web honeypot service
│   │   │   ├── 📁 ftp_honeypot.py      # FTP honeypot service
│   │   │   ├── 🔌 telnet_honeypot.py   # Telnet honeypot service
│   │   │   ├── 🗄️ mysql_honeypot.py    # MySQL honeypot service
│   │   │   ├── ⚡ redis_honeypot.py    # Redis honeypot service
│   │   │   └── 🎮 honeypot_manager.py  # Central honeypot manager
│   │   ├── 📁 models/                  # Database models
│   │   ├── 📁 data_store.py            # Data persistence layer
│   │   ├── 📁 database.py              # Database connection management
│   │   ├── 📁 config.py                # Configuration settings
│   │   ├── 📁 main.py                  # Main Flask application
│   │   └── 📁 log_manager/             # Logging and monitoring
│   ├── 📁 startup_scripts/             # System startup automation
│   ├── 📁 requirements.txt              # Python dependencies
│   └── 📁 configuration/               # Environment and config files
│
├── 🎨 honeyvision-dash/                # Frontend dashboard
│   ├── 📁 src/                         # React source code
│   │   ├── 📁 components/              # Reusable UI components
│   │   │   ├── 📁 dashboard/           # Dashboard-specific components
│   │   │   ├── 📁 ui/                  # Base UI components
│   │   │   └── 📁 layout/              # Layout components
│   │   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── 📁 pages/                   # Page components
│   │   ├── 📁 utils/                   # Utility functions
│   │   └── 📁 types/                   # TypeScript type definitions
│   ├── 📁 public/                      # Static assets
│   ├── 📁 package.json                 # Node.js dependencies
│   └── 📁 vite.config.ts               # Vite configuration
│
├── 📚 documentation/                    # Project documentation
├── 🧪 tests/                           # Test suites
├── 🚀 deployment/                      # Deployment configurations
└── 📖 README.md                        # This comprehensive guide
```

---

## ⚡ Quick Start

### **Prerequisites**
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn package manager
- Git version control
- Supabase account (for database)

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/honeyvision.git
cd honeyvision
```

### **2. Backend Setup**
```bash
# Navigate to backend directory
cd cybersecurity-honeynet

# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp env.example .env
# Edit .env with your Supabase credentials

# Initialize database
python -c "from src.database import db_manager; db_manager.init_database()"
```

### **3. Frontend Setup**
```bash
# Navigate to frontend directory
cd ../honeyvision-dash

# Install Node.js dependencies
npm install

# Start development server
npm run dev
```

### **4. Start the System**
```bash
# From cybersecurity-honeynet directory
# Option 1: Start all honeypots
python start_all_honeypots.py

# Option 2: Use startup scripts
./start_honeynet.sh          # Linux/Mac
start_honeynet.bat           # Windows
start_honeynet.ps1           # PowerShell
```

### **5. Access the Dashboard**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **SSH Honeypot**: localhost:2222
- **Web Honeypot**: http://localhost:8080
- **FTP Honeypot**: localhost:21
- **Telnet Honeypot**: localhost:23
- **MySQL Honeypot**: localhost:3306
- **Redis Honeypot**: localhost:6379

---

## 🍯 Honeypot Types

### **1. 🐝 SSH Honeypot (Port 2222)**
- **Purpose**: Capture SSH brute force attacks and credential attempts
- **Features**: 
  - Realistic SSH banner and responses
  - Fake user accounts with common passwords
  - Command execution simulation
  - Session logging and monitoring
- **Attraction Factors**: Default credentials, vulnerable appearance

### **2. 🌐 Web Honeypot (Port 8080)**
- **Purpose**: Monitor web-based attacks and scanning activities
- **Features**:
  - Fake admin panels and login forms
  - Vulnerable-looking web applications
  - Directory traversal simulation
  - SQL injection attempt logging
- **Attraction Factors**: Admin interfaces, common vulnerabilities

### **3. 📁 FTP Honeypot (Port 21)**
- **Purpose**: Capture FTP-based attacks and file access attempts
- **Features**:
  - Authentic FTP server responses
  - Fake file structures and directories
  - User authentication simulation
  - File listing and download attempts
- **Attraction Factors**: Anonymous access, fake sensitive files

### **4. 🔌 Telnet Honeypot (Port 23)**
- **Purpose**: Monitor legacy protocol attacks and command injection
- **Features**:
  - Linux system simulation
  - Realistic command responses
  - Fake process listings
  - System information spoofing
- **Attraction Factors**: Default credentials, system access

### **5. 🗄️ MySQL Honeypot (Port 3306)**
- **Purpose**: Capture database attacks and SQL injection attempts
- **Features**:
  - Authentic MySQL server responses
  - Fake databases and tables
  - SQL command execution simulation
  - Database structure exploration
- **Attraction Factors**: Default credentials, sensitive data

### **6. ⚡ Redis Honeypot (Port 6379)**
- **Purpose**: Monitor cache server attacks and data exfiltration
- **Features**:
  - Redis protocol implementation
  - Fake key-value data
  - Command execution logging
  - Cache manipulation attempts
- **Attraction Factors**: Unprotected access, sensitive data

---

## 📊 Dashboard Components

### **🎯 Metrics Cards**
- **Total Attacks**: Real-time attack count
- **Honeypot Hits**: Individual honeypot activity
- **Token Triggers**: Honeytoken activation events
- **Active Honeypots**: Currently running services
- **Critical Alerts**: High-priority security events
- **Unique IPs**: Distinct attacker identification

### **📈 Data Visualizations**
- **Attack Timeline**: Temporal attack patterns
- **Attack Type Chart**: Categorization of threats
- **Geographic Map**: Global attack origins
- **Honeypot Status**: Service health monitoring
- **Recent Alerts**: Latest security events

### **🔍 Interactive Features**
- **Real-time Updates**: Live data refresh
- **Data Filtering**: Advanced search and filtering
- **Export Capabilities**: Data export in multiple formats
- **Responsive Design**: Mobile and desktop optimization
- **Dark/Light Mode**: Theme customization

---

## 🔌 API Endpoints

### **Dashboard Data**
- `GET /dashboard/data` - Complete dashboard data
- `GET /dashboard/metrics` - Key performance metrics
- `GET /dashboard/timeline` - Attack timeline data
- `GET /dashboard/attacks` - Attack details and statistics
- `GET /dashboard/attack-types` - Attack categorization
- `GET /dashboard/alerts` - Security alerts and notifications
- `GET /dashboard/honeypot-status` - Honeypot health status

### **Data Management**
- `POST /dashboard/reset` - Reset all captured data
- `GET /api/health` - System health check
- `GET /api/version` - API version information

### **Honeypot Data**
- `GET /api/ssh-attempts` - SSH attack attempts
- `GET /api/web-requests` - Web attack requests
- `GET /api/ftp-attempts` - FTP access attempts
- `GET /api/telnet-attempts` - Telnet connection attempts
- `GET /api/mysql-attempts` - MySQL attack attempts
- `GET /api/redis-attempts` - Redis access attempts

---

## 🗄️ Database Schema

### **Core Tables**
```sql
-- SSH Attack Attempts
CREATE TABLE ssh_attempts (
    id SERIAL PRIMARY KEY,
    ip_address INET NOT NULL,
    username VARCHAR(255),
    password VARCHAR(255),
    success BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMP DEFAULT NOW(),
    user_agent TEXT,
    country VARCHAR(100),
    city VARCHAR(100)
);

-- Web Requests
CREATE TABLE http_requests (
    id SERIAL PRIMARY KEY,
    ip_address INET NOT NULL,
    method VARCHAR(10),
    path TEXT,
    user_agent TEXT,
    timestamp TIMESTAMP DEFAULT NOW(),
    headers JSONB,
    body TEXT
);

-- Security Alerts
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    alert_type VARCHAR(100),
    severity VARCHAR(20),
    message TEXT,
    source VARCHAR(100),
    details JSONB,
    timestamp TIMESTAMP DEFAULT NOW(),
    resolved BOOLEAN DEFAULT FALSE
);

-- Honeypot Status
CREATE TABLE honeypot_status (
    id SERIAL PRIMARY KEY,
    honeypot_type VARCHAR(50),
    status VARCHAR(20),
    hits INTEGER DEFAULT 0,
    uptime INTERVAL,
    last_hit TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Data Relationships**
- **One-to-Many**: IP addresses to attack attempts
- **One-to-Many**: Honeypot types to status records
- **One-to-Many**: Alert types to individual alerts
- **Many-to-One**: Attacks to geographic locations

---

## 🚀 Deployment

### **Development Environment**
```bash
# Backend
cd cybersecurity-honeynet
python src/main.py

# Frontend
cd honeyvision-dash
npm run dev
```

### **Production Deployment**
```bash
# Using Docker
docker-compose up -d

# Manual deployment
# Backend
gunicorn -w 4 -b 0.0.0.0:5000 src.main:app

# Frontend
npm run build
# Serve built files with nginx
```

### **Environment Configuration**
```bash
# Required environment variables
DATABASE_URI=postgresql://user:pass@host:port/db
SUPABASE_HOST=your-project.supabase.co
SUPABASE_DATABASE=postgres
SUPABASE_USER=postgres
SUPABASE_PASSWORD=your-password
FLASK_ENV=production
SECRET_KEY=your-secret-key
```

---

## 🔒 Security Features

### **Honeypot Security**
- **Isolation**: Honeypots run in isolated environments
- **Monitoring**: Comprehensive logging of all activities
- **Alerting**: Real-time notification of suspicious events
- **Data Sanitization**: Input validation and sanitization
- **Access Control**: Restricted access to honeypot data

### **Dashboard Security**
- **Authentication**: User authentication and authorization
- **HTTPS**: Secure communication protocols
- **Input Validation**: Client and server-side validation
- **SQL Injection Protection**: Parameterized queries
- **XSS Prevention**: Content Security Policy implementation

### **Data Protection**
- **Encryption**: Data encryption at rest and in transit
- **Access Logging**: Comprehensive audit trails
- **Data Retention**: Configurable data retention policies
- **Backup Security**: Secure backup and recovery procedures

---

## 📈 Monitoring & Analytics

### **Real-Time Monitoring**
- **Live Dashboard**: Real-time data updates
- **Performance Metrics**: System health monitoring
- **Resource Usage**: CPU, memory, and network monitoring
- **Error Tracking**: Comprehensive error logging and alerting

### **Analytics Capabilities**
- **Attack Patterns**: Identify recurring threat patterns
- **Geographic Analysis**: Map attack origins worldwide
- **Temporal Analysis**: Track attack frequency over time
- **Threat Intelligence**: Correlate with external threat feeds

### **Reporting Features**
- **Automated Reports**: Scheduled report generation
- **Custom Dashboards**: User-configurable views
- **Data Export**: Multiple export formats (CSV, JSON, PDF)
- **Alert Management**: Configurable alerting rules

---

## 🛠️ Development

### **Code Quality**
- **TypeScript**: Static type checking for frontend
- **Python Type Hints**: Type annotations for backend
- **ESLint**: JavaScript/TypeScript linting
- **Black**: Python code formatting
- **Pre-commit Hooks**: Automated quality checks

### **Testing Strategy**
- **Unit Tests**: Individual component testing
- **Integration Tests**: API endpoint testing
- **End-to-End Tests**: Complete workflow testing
- **Performance Tests**: Load and stress testing
- **Security Tests**: Vulnerability assessment

### **Development Workflow**
```bash
# Feature development
git checkout -b feature/new-honeypot
# Make changes
npm run test          # Run tests
npm run build         # Build project
git commit -m "Add new honeypot type"
git push origin feature/new-honeypot
```

---

## 🧪 Testing

### **Backend Testing**
```bash
# Run Python tests
cd cybersecurity-honeynet
python -m pytest tests/

# Run specific test categories
python -m pytest tests/test_honeypots.py
python -m pytest tests/test_api.py
python -m pytest tests/test_database.py
```

### **Frontend Testing**
```bash
# Run React tests
cd honeyvision-dash
npm run test

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

### **Integration Testing**
```bash
# Test complete system
python test_dashboard.py
python test_honeynet.py

# Test API endpoints
curl http://localhost:5000/dashboard/data
curl http://localhost:5000/api/health
```

---

## 📚 Documentation

### **Available Documentation**
- **API Reference**: Complete endpoint documentation
- **Honeypot Guide**: Detailed honeypot configuration
- **Deployment Guide**: Production deployment instructions
- **Troubleshooting**: Common issues and solutions
- **Contributing Guide**: Development contribution guidelines

### **Documentation Structure**
```
documentation/
├── 📖 api-reference.md          # API documentation
├── 🍯 honeypot-guide.md         # Honeypot configuration
├── 🚀 deployment-guide.md       # Deployment instructions
├── 🔧 troubleshooting.md        # Common issues
├── 👥 contributing.md           # Contribution guidelines
└── 📋 changelog.md             # Version history
```

---

## 🤝 Contributing

### **How to Contribute**
1. **Fork the Repository**: Create your own fork
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Implement your improvements
4. **Run Tests**: Ensure all tests pass
5. **Submit Pull Request**: Create a detailed PR description

### **Contribution Areas**
- **New Honeypot Types**: Additional protocol support
- **Dashboard Features**: New visualization components
- **API Enhancements**: Additional endpoints and functionality
- **Documentation**: Improved guides and examples
- **Testing**: Additional test coverage
- **Performance**: Optimization and scalability improvements

### **Code Standards**
- **Python**: PEP 8 compliance, type hints
- **JavaScript/TypeScript**: ESLint rules, consistent formatting
- **Documentation**: Clear, comprehensive docstrings
- **Testing**: Minimum 80% code coverage
- **Security**: Security-first development approach

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **License Terms**
- **Commercial Use**: Allowed
- **Modification**: Allowed
- **Distribution**: Allowed
- **Private Use**: Allowed
- **Liability**: Limited
- **Warranty**: No warranty provided

---

## 🙏 Acknowledgments

### **Open Source Contributors**
- **Flask Community**: Web framework foundation
- **React Team**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Database infrastructure
- **Python Community**: Language and ecosystem

### **Security Community**
- **Honeypot Researchers**: Academic and industry research
- **Cybersecurity Experts**: Threat intelligence and analysis
- **Open Source Security Tools**: Foundation and inspiration

---

## 📞 Support & Contact

### **Getting Help**
- **Documentation**: Comprehensive guides and tutorials
- **Issues**: GitHub issue tracker for bugs and features
- **Discussions**: GitHub discussions for questions and ideas
- **Wiki**: Additional resources and examples

### **Contact Information**
- **GitHub**: [Project Repository](https://github.com/yourusername/honeyvision)
- **Issues**: [Bug Reports](https://github.com/yourusername/honeyvision/issues)
- **Discussions**: [Community Forum](https://github.com/yourusername/honeyvision/discussions)
- **Wiki**: [Project Wiki](https://github.com/yourusername/honeyvision/wiki)

---

<div align="center">

**🍯 HoneyVision - Where Cybersecurity Meets Innovation**

*Built with ❤️ by the cybersecurity community*

[![GitHub Stars](https://img.shields.io/github/stars/yourusername/honeyvision?style=social)](https://github.com/yourusername/honeyvision)
[![GitHub Forks](https://img.shields.io/github/forks/yourusername/honeyvision?style=social)](https://github.com/yourusername/honeyvision)
[![GitHub Issues](https://img.shields.io/github/issues/yourusername/honeyvision)](https://github.com/yourusername/honeyvision/issues)
[![GitHub License](https://img.shields.io/github/license/yourusername/honeyvision)](https://github.com/yourusername/honeyvision/blob/main/LICENSE)

</div>
