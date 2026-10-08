const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkDB() {
  console.log('Fetching data from Supabase [videos] table...');
  const { data, error } = await supabase.from('videos').select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log(`Success! Found ${data.length} records.`);
    console.log('Data:', data);
  }
}

checkDB();
