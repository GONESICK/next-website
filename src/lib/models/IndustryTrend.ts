import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IIndustryTrend extends Document {
  title: string;
  description: string;
  content: string;
  category: string;
  date: Date;
  imageUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const IndustryTrendSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Technology', 'Business', 'Finance', 'Healthcare', 'Sustainability', 'Other'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const IndustryTrend: Model<IIndustryTrend> =
  mongoose.models.IndustryTrend || mongoose.model<IIndustryTrend>('IndustryTrend', IndustryTrendSchema);

export default IndustryTrend;
