interface BusinessMetric {
  id: number;
  value: string;
  description: string;
}

interface BusinessMetricsProps {
  businessMetrics: BusinessMetric[];
}

export default function BusinessMetrics({
  businessMetrics,
}: BusinessMetricsProps) {
  return (
    <div className="business-metrics bg-primary">
      <div className="container mx-auto">
        <section className="flex justify-center text-white">
          {businessMetrics.map(({ id, value, description }) => (
            <article
              className="business-metric flex-1 text-center p-8"
              key={id}
            >
              <h2 className="font-bold text-4xl mb-2">{value}</h2>
              <p className="font-light">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
