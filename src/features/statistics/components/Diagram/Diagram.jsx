import {
  PieChart,
  Pie,
  Label,
  Sector,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  // Якщо мишка не наведена на сектор, нічого не рендеримо
  if (!active || !payload || !payload.length) return null;

  // Дістаємо дані поточної категорії, на яку навели мишку
  const { name, totalAmount, color } = payload[0].payload;

  return (
    <div className="pointer-events-none flex flex-col gap-y-1 rounded-lg border border-gray-100 bg-white/95 p-3 text-sm shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-x-2 font-semibold text-gray-800">
        {/* Маленька кольорова точка кольору категорії всередині підказки */}
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>{name}</span>
      </div>
      <span className="pl-4.5 font-medium text-gray-500">
        {totalAmount.toLocaleString('uk-UA', { minimumFractionDigits: 2 })} грн
      </span>
    </div>
  );
};

const Diagram = ({ expenseStatistics, totalExpense }) => {
  const renderCustomSector = props => {
    const { fill, ...rest } = props;
    const sectorColor = props.payload?.color || fill;
    return <Sector {...rest} fill={sectorColor} />;
  };

  if (expenseStatistics && expenseStatistics.length > 0) {
    return (
      <div className="[&_*:focus]:outline-none">
        <ResponsiveContainer width="100%" aspect={1}>
          <PieChart style={{ outline: 'none' }}>
            <Tooltip
              content={<CustomTooltip />}
              trigger="hover"
              //   formatter={value => [
              //     `${value.toLocaleString('uk-UA', { minimumFractionDigits: 2 })} грн`,
              //     'Сума',
              //   ]}
              //   contentStyle={{
              //     borderRadius: '8px',
              //     border: 'none',
              //     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              //   }}
            />
            <Pie
              data={expenseStatistics}
              cx="50%"
              cy="50%"
              innerRadius="75%"
              outerRadius="100%"
              dataKey="totalAmount"
              nameKey="name"
              shape={renderCustomSector}
            >
              <Label
                position="center"
                fill="#000"
                className="text-lg font-bold"
              >
                {`₴ ${totalExpense
                  .toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  .replace(/,/g, ' ')}`}
              </Label>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Diagram;
