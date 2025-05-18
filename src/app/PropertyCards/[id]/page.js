// import { notFound } from 'next/navigation';
// import { properties } from '@/data/properties';
// import PropertyDetail from '@/components/PropertyDetailClient';


// export async function generateStaticParams() {
//   return properties.map((property) => ({
//     id: property.id.toString(),
//   }));
// }

// export default function PropertyPage({ params }) {
//   const property = properties.find(p => p.id.toString() === params.id);

//   if (!property) {
//     notFound();
//   }

//   return <PropertyDetail initialProperty={property} />;
// }
