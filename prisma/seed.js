const fs = require('fs');
const path = require('path');

const leads = [];
for(let i=1;i<=200;i++){
  leads.push({
    id:i,
    name:`Lead ${i}`,
    email:`lead${i}@example.com`,
    company:`Company ${i%10}`,
    campaignId: (i%5)+1,
    status: ['Pending','Contacted','Responded','Converted'][i%4],
    lastContact: new Date(Date.now() - i*3600*1000).toISOString()
  })
}

fs.writeFileSync(path.join(__dirname,'/data/leads.json'), JSON.stringify(leads,null,2));
console.log('Seed data written to prisma/data/leads.json');
