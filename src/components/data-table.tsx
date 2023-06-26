function getBooleanIcon(value: boolean) {
  if (value) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="w-5 h-5 text-green-500"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-red-500"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    );
  }
}

interface DataTableProps {
  title: string;
  subtitle: string;
  headers: any[];
  data: any[];
}

export default function DataTable({
  title,
  subtitle,
  headers,
  data,
}: DataTableProps) {
  return (
    <div className="data-table container mx-auto my-8 px-20">
      <section className="px-16 py-16 items-center">
        <h4 className="text-3xl font-bold text-center">{title}</h4>
        <h5 className="text-gray-500 text-center mt-4">{subtitle}</h5>
        <table className="border border-slate-100 shadow-xl mt-8 text-sm mx-auto">
          <thead className="">
            <tr className="">
              {headers.map(({ key, value }) => (
                <th className="p-8 font-bold" key={key}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((entries) => (
              <tr className="border-t border-t-slate-100" key={entries.id}>
                {Object.entries(entries).map(([key, value]) => {
                  if (key === "id") {
                    return null;
                  }

                  return (
                    <td
                      className="p-8 first:font-bold first:text-black-900"
                      key={key}
                    >
                      <span className="flex justify-center">
                        {typeof value === "boolean" && getBooleanIcon(value)}
                        {typeof value === "string" && value}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
