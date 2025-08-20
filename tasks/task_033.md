# Task 33: Supabase Local Setup and Database Schema

**Status:** pending
**Priority:** high

**Dependencies:** 32

## Description
Set up a local Supabase instance and create the database schema for storing chat sessions and messages.

## Details
1. Install Supabase CLI:
```bash
npm install -g supabase
```
2. Initialize local Supabase project:
```bash
supabase init
supabase start
```
3. Create database migrations for the required tables:
```sql
-- Create chat_sessions table
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL
);

-- Create chat_messages table
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  chat_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  type TEXT CHECK (type IN ('text', 'image')),
  image_url TEXT
);
```
4. Apply migrations to local Supabase instance:
```bash
supabase migration up
```
5. Configure Supabase client in the application:
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

## Test Strategy
1. Verify Supabase local instance is running correctly
2. Test database connection from the application
3. Validate schema by inserting and querying test records
4. Ensure foreign key constraints work as expected
5. Verify type constraints are enforced correctly
6. Test Supabase client initialization and connection in the application

