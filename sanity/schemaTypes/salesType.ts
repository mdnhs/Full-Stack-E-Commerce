import { TrendUpwardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: "totalSales",
      title: "Total Sales",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      options: {
        list: [
          { title: "Daily", value: "daily" },
          { title: "Weekly", value: "weekly" },
          { title: "Monthly", value: "monthly" },
          { title: "Yearly", value: "yearly" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ordersCount",
      title: "Number of Orders",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "averageOrderValue",
      title: "Average Order Value",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      sales: "totalSales",
      period: "period",
      date: "date",
      currency: "currency",
    },
    prepare(selection) {
      const { sales, period, date, currency } = selection;
      return {
        title: `${period.charAt(0).toUpperCase() + period.slice(1)} Sales: ${currency}${sales}`,
        subtitle: new Date(date).toLocaleDateString(),
        media: TrendUpwardIcon,
      };
    },
  },
});
