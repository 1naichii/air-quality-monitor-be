# Air Quality Monitor Backend

Backend API untuk sistem monitoring kualitas udara menggunakan sensor MQ135.

## Features

- 📊 Air quality monitoring
- 🔐 API Key authentication
- 📈 AQI (Air Quality Index) calculation
- 🗄️ MySQL database dengan Prisma ORM
- 🚀 Ready untuk deployment di Vercel

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **ORM:** Prisma
- **Authentication:** API Key based

## API Endpoints

### GET /api/sensor/mq135
Mendapatkan semua data sensor MQ135 (terbaru di atas)

**Headers:**
```
X-API-Key: your-api-key
```

**Response:**
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

**Headers:**
```
X-API-Key: your-api-key
Content-Type: application/json
```

**Body:**
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

## Environment Variables

Buat file `.env` dengan konfigurasi berikut:

```env
PORT=3000
DATABASE_URL="mysql://username:password@host:port/database_name"
API_KEY="your-secret-api-key-here"
CORS_ORIGINS="http://localhost:5173,http://localhost:5174,http://localhost:5175,http://localhost:5176"
```

## Installation & Development

1. Clone repository
```bash
git clone https://github.com/1naichii/air-quality-monitor-be.git
cd air-quality-monitor-be
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env
# Edit .env dengan konfigurasi database dan API key Anda
```

4. Setup database
```bash
npx prisma migrate dev
```

5. Start development server
```bash
npm run dev
```

## Deployment

### Vercel

1. Push ke GitHub repository
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard:
   - `DATABASE_URL`
   - `API_KEY`
4. Deploy

### Manual

```bash
npm start
```

## Database Schema

```sql
CREATE TABLE sensor_data (
  id INT PRIMARY KEY AUTO_INCREMENT,
  air_quality_raw INT NOT NULL,
  reading_time TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  aqi INT NOT NULL
);
```

## CORS Configuration

CORS dikonfigurasi melalui environment variable `CORS_ORIGINS`. 

Default origins yang didukung:
- http://localhost:5173
- http://localhost:5174  
- http://localhost:5175
- http://localhost:5176

Untuk menambah/mengubah origins, set `CORS_ORIGINS` dengan format:
```env
CORS_ORIGINS="https://yourfrontend.vercel.app,http://localhost:3000,https://yourdomain.com"
```

## Author

**1naichii**

## License

MIT
