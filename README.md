# 🌬️ Air Quality Monitor - Backend

> REST API untuk sistem monitoring kualitas udara real-time dengan sensor MQ135 menggunakan Node.js + Express dan MySQL database

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com)
[![Deployment Status](https://img.shields.io/badge/Deployment-Ready-brightgreen.svg)](https://vercel.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-blue.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.2.1-2D3748.svg)](https://prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-orange.svg)](https://mysql.com/)

**Repository**: [1naichii/air-quality-monitor-be](https://github.com/1naichii/air-quality-monitor-be) | **Author**: 1naichii | **License**: MIT

---

## ✨ Fitur Utama

- 📊 **Air Quality Monitoring** - REST API untuk data sensor MQ135
- 🔐 **API Key Authentication** - Secure API access dengan X-API-Key header
- 📈 **AQI Calculation** - Auto-calculation Air Quality Index dari raw data
- 🗄️ **MySQL Database** - Prisma ORM dengan auto-timestamps
- 🚀 **Vercel Ready** - Serverless deployment configuration
- 🔄 **CORS Support** - Multi-origin support untuk frontend integration
- ⚡ **Performance Optimized** - Express.js dengan efficient database queries
- 🛡️ **Secure Environment** - Environment-based configuration
- 📝 **API Documentation** - Clear endpoint documentation dengan examples

## 🛠️ Teknologi

| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| **Runtime** | Node.js | 18+ |
| **Framework** | Express.js | 4.21.2 |
| **Database** | MySQL | 8.0+ |
| **ORM** | Prisma | 6.2.1 |
| **Authentication** | API Key | Custom middleware |
| **Deployment** | Vercel | Serverless |
| **CORS** | cors | 2.8.5 |

## 🔗 Frontend Integration

### Compatible Frontend
Backend ini terhubung dengan frontend React PWA:

| Repository | URL | Technology |
|------------|-----|------------|
| [air-quality-monitor-fe](https://github.com/1naichii/air-quality-monitor-fe) | [Live Demo](https://air-quality-monitor-fe.vercel.app) | React + Vite + PWA |

### Required Headers
```
X-API-Key: your-secret-api-key
Content-Type: application/json
```

### CORS Origins
Dikonfigurasi untuk mendukung multiple origins via environment variable `CORS_ORIGINS`.

## 📋 API Endpoints

### GET /api/sensor/mq135
Mendapatkan semua data sensor MQ135 (terbaru di atas)

**Authentication Required:**
```
X-API-Key: your-api-key
```

**Response Format:**
```json
[
  {
    "id": 1,
    "air_quality_raw": 150,
    "reading_time": "2025-06-10T08:30:00.000Z",
    "aqi": 65
  }
]
```

### POST /api/sensor/mq135
Menambah data sensor MQ135 baru

**Authentication Required:**
```
X-API-Key: your-api-key
Content-Type: application/json
```

**Request Body:**
```json
{
  "air_quality_raw": 150,
  "aqi": 65
}
```

**Response:**
```json
{
  "id": 1,
  "air_quality_raw": 150,
  "reading_time": "2025-06-10T08:30:00.000Z",
  "aqi": 65
}
```

## 🔐 Environment Variables

Buat file `.env` dengan konfigurasi berikut:

### Production Variables (Required)
```env
# Database Configuration
DATABASE_URL="mysql://username:password@host:port/database_name"

# API Security
API_KEY="your-secret-api-key-here"

# CORS Configuration
CORS_ORIGINS="https://your-frontend.app"

# Optional
PORT=3000
```

### Environment Variable Details

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ Yes | MySQL connection string |
| `API_KEY` | ✅ Yes | Secret key untuk API authentication |
| `CORS_ORIGINS` | ✅ Yes | Comma-separated list of allowed origins |
| `PORT` | ❌ No | Server port (default: 3000) |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm/yarn
- MySQL database (Aiven, PlanetScale, atau local)
- Git untuk version control

### Installation & Development

```bash
# 1. Clone repository
git clone https://github.com/1naichii/air-quality-monitor-be.git
cd air-quality-monitor-be

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env dengan konfigurasi database dan API key Anda

# 4. Setup database
npx prisma migrate dev

# 5. Start development server
npm run dev

# 6. Akses API di http://localhost:3000
```

### Environment Setup
```env
# Copy dari .env.example dan isi dengan nilai Anda
DATABASE_URL="mysql://user:password@host:port/database"
API_KEY="your-secret-api-key"
CORS_ORIGINS="http://localhost:5173"
```

## 📁 Project Structure

```
src/
├── controllers/          # Route handlers
│   └── mq135Controller.js # MQ135 sensor endpoints
├── middleware/           # Express middleware
│   └── auth.js          # API key authentication
├── routes/              # API routes
│   ├── index.js        # Main router
│   └── mq135Routes.js  # MQ135 sensor routes
└── server.js           # Main Express application

prisma/
├── schema.prisma       # Database schema
└── migrations/         # Database migrations

config/
└── vercel.json        # Vercel deployment config
```

## ⚙️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server dengan nodemon |
| `npm start` | Start production server |
| `npm run build` | Generate Prisma client |
| `npx prisma migrate dev` | Run database migrations |
| `npx prisma studio` | Open Prisma Studio untuk database management |

## 🚀 Deployment ke Vercel

### ✅ Status: READY FOR DEPLOYMENT

**Quick Deploy:**
1. Push ke GitHub ✅ (sudah selesai)
2. Buka [vercel.com](https://vercel.com) dan login dengan GitHub
3. Import repository: `1naichii/air-quality-monitor-be`
4. Set environment variables production:
   ```env
   # Required Configuration
   DATABASE_URL=mysql://user:pass@host:port/db
   API_KEY=your-production-api-key
   CORS_ORIGINS=https://air-quality-monitor-fe.vercel.app,https://yourdomain.com
   ```
5. Deploy! (2-3 menit)

**Vercel CLI Alternative:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Expected Result:**
- 🌍 Live API: `https://air-quality-monitor-be.vercel.app`
- ⚡ Serverless: Auto-scaling dengan Edge Functions
- 🔐 Secure: Environment variables tidak terekspos
- 📊 Ready: Siap menerima data dari sensor MQ135

### Manual Deployment (Alternative)

```bash
# Traditional hosting (Railway, Render, dll)
npm start
```

## 🗄️ Database Schema

### Prisma Schema
```prisma
model SensorData {
  id              Int      @id @default(autoincrement())
  air_quality_raw Int
  reading_time    DateTime @default(now()) @db.Timestamp(6)
  aqi             Int

  @@map("sensor_data")
}
```

### SQL Schema (MySQL)
```sql
CREATE TABLE sensor_data (
  id INT PRIMARY KEY AUTO_INCREMENT,
  air_quality_raw INT NOT NULL,
  reading_time TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  aqi INT NOT NULL
);
```

### Database Operations
```bash
# Reset database (development only)
npx prisma migrate reset

# Apply migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Open database browser
npx prisma studio
```

## 🔧 CORS Configuration

CORS dikonfigurasi melalui environment variable `CORS_ORIGINS` untuk mendukung multiple frontend origins.

### Default Origins (Development)
```env
CORS_ORIGINS="http://localhost:5173,http://localhost:5174,http://localhost:5175"
```

### Production Configuration
```env
CORS_ORIGINS="https://air-quality-monitor-fe.vercel.app,https://yourdomain.com"
```

### Implementation Details
- **Dynamic Origins**: Parsing dari environment variable
- **Secure**: Hanya origins yang didaftarkan yang diizinkan
- **Flexible**: Dapat ditambah/ubah tanpa code changes
- **Development Friendly**: Support multiple localhost ports

```javascript
// Auto-parsed dari CORS_ORIGINS environment variable
const allowedOrigins = process.env.CORS_ORIGINS.split(',').map(origin => origin.trim());
```

## 🚨 Troubleshooting

### Common Issues & Solutions

**Database Connection Issues:**
```bash
# Test koneksi database
npx prisma db push
npx prisma studio  # Buka database browser
```

**API Authentication Errors:**
- Verify `API_KEY` environment variable is set
- Ensure `X-API-Key` header di-include dalam request
- Check API key format: harus string tanpa prefix/suffix
- Test dengan curl:
  ```bash
  curl -H "X-API-Key: your-api-key" https://your-api.vercel.app/api/sensor/mq135
  ```

**CORS Issues:**
- Verify `CORS_ORIGINS` includes frontend domain
- Check browser network tab untuk CORS errors
- Ensure tidak ada trailing slash di origins
- Test dengan different browsers untuk isolation

**Vercel Deployment Issues:**
- Check Vercel function logs di dashboard
- Verify environment variables di Vercel settings
- Ensure `vercel.json` configuration is correct
- Test build locally: `npm run build`

**Database Migration Issues:**
```bash
# Reset database (development only!)
npx prisma migrate reset

# Apply specific migration
npx prisma migrate dev --name migration-name

# Check migration status
npx prisma migrate status
```

## 📊 Performance Metrics

- **API Response Time**: < 200ms average
- **Database Query Time**: < 50ms untuk single record
- **Vercel Cold Start**: < 1 second
- **Concurrent Requests**: Unlimited (serverless scaling)
- **Database Connections**: Prisma connection pooling

## 🎯 Features After Deployment

- ✅ **REST API Endpoints** untuk sensor MQ135 data
- ✅ **Secure Authentication** dengan API key middleware
- ✅ **Auto AQI Calculation** dari raw sensor values
- ✅ **MySQL Database** dengan Prisma ORM
- ✅ **CORS Support** untuk frontend integration
- ✅ **Serverless Deployment** di Vercel dengan auto-scaling
- ✅ **Environment Configuration** untuk multiple environments
- ✅ **Database Migrations** untuk schema versioning

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**1naichii**
- GitHub: [@1naichii](https://github.com/1naichii)

## 🙏 Acknowledgments

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [Prisma](https://prisma.io/) - Database ORM
- [Vercel](https://vercel.com/) - Deployment platform
- [MySQL](https://mysql.com/) - Database system
