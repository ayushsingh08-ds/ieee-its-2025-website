# 📝 Content Management Guide

> **Easy Content Management** - No frontend editing required, just update data files!

This guide explains how to easily add, edit, and manage all website content by simply editing structured data files in the code.

## 📂 Data File Structure

All content is organized in separate data files for easy management:

```
src/
├── data/
│   ├── eventsData.ts           # Main events page content
│   └── blogData.ts             # Blog posts and research articles
└── components/
    ├── UpcomingEvents.tsx      # Uses eventsData.ts
    └── BlogNews.tsx            # Uses blogData.ts
```

---

## 🎪 Managing Events

### File: `src/data/eventsData.ts`

#### ✅ To Add New Event:

1. Open `src/data/eventsData.ts`
2. Scroll to the `EVENTS_DATA` array
3. Copy an existing event object
4. Update the `id` (increment by 1)
5. Modify all the fields:

```typescript
{
  id: 4, // INCREMENT THIS NUMBER
  title: "Your Event Title",
  description: "Detailed description...",
  image: "https://images.unsplash.com/photo-YOUR-IMAGE-ID",
  date: "2025-12-15", // YYYY-MM-DD format
  time: "2:00 PM - 5:00 PM",
  location: "Your venue or 'Virtual Event'",
  attendees: 50,
  category: "WORKSHOP", // Use: WORKSHOP, SEMINAR, CONFERENCE, PANEL, WEBINAR, COMPETITION, LECTURE
  // Optional fields:
  speakers: ["Speaker 1", "Speaker 2"],
  tags: ["Tag1", "Tag2"],
  isFeatured: true, // Show on homepage
}
```

#### ✏️ To Edit Event:

1. Find the event by title in `EVENTS_DATA` array
2. Modify any field (title, description, date, etc.)
3. Save the file

#### 🗑️ To Remove Event:

1. Find the event in `EVENTS_DATA` array
2. Delete the entire event object (including braces)

---

## 📰 Managing Blog Posts

### File: `src/data/blogData.ts`

#### ✅ To Add New Blog Post:

1. Open `src/data/blogData.ts`
2. Scroll to `BLOG_POSTS_DATA` array
3. Copy an existing post object
4. Update fields:

```typescript
{
  id: 5, // INCREMENT THIS NUMBER
  title: "Your Blog Post Title",
  excerpt: "Brief description...",
  image: "https://images.unsplash.com/photo-ID",
  author: "Author Name",
  date: "2025-10-30", // YYYY-MM-DD format
  readTime: "8 min read",
  category: "RESEARCH", // Use: RESEARCH, APPLICATIONS, QUANTUM, NETWORKS, THEORY, TUTORIAL
  likes: 0,
  comments: 0,
  views: 0,
  tags: ["Tag1", "Tag2"],
  isFeatured: false, // Set true for homepage highlight
}
```

#### ✏️ To Edit Blog Post:

1. Find the post by title in `BLOG_POSTS_DATA`
2. Modify any field (title, excerpt, author, etc.)
3. Save the file

---

## 🎨 Available Categories

### Event Categories:

- `WORKSHOP` - Hands-on learning sessions
- `SEMINAR` - Educational presentations
- `CONFERENCE` - Large academic gatherings
- `PANEL` - Expert discussion panels
- `WEBINAR` - Online presentations
- `COMPETITION` - Student competitions
- `LECTURE` - Academic lectures

### Blog Categories:

- `RESEARCH` - Research papers and findings
- `APPLICATIONS` - Practical applications
- `QUANTUM` - Quantum computing topics
- `NETWORKS` - Network theory and systems
- `THEORY` - Theoretical foundations
- `TUTORIAL` - How-to guides and tutorials

---

## 🔧 Quick Tips

### ✅ Best Practices:

1. **Increment IDs**: Always use the next available ID number
2. **Date Format**: Use YYYY-MM-DD format for proper sorting
3. **Images**: Use Unsplash URLs or upload to `/public` folder
4. **Categories**: Only use predefined categories for consistency
5. **Test**: Run `npm run build` after changes to check for errors

### 🖼️ Finding Images:

1. Go to [Unsplash.com](https://unsplash.com)
2. Search for relevant images
3. Copy the URL and modify to add `?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`
4. Example: `https://images.unsplash.com/photo-ID?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`

### 🎯 Content Guidelines:

- **Titles**: Keep under 60 characters for SEO
- **Excerpts**: 2-3 sentences, 120-160 characters
- **Descriptions**: Detailed but scannable (2-3 paragraphs)
- **Tags**: Use 2-4 relevant tags per item
- **Authors**: Use full names with credentials

---

## 🚀 Deployment

After making changes:

```bash
# Test your changes
npm run build

# Deploy to production
npm run deploy
```

The website will automatically update with your new content!

---

## 📞 Need Help?

### Common Issues:

1. **Build Errors**: Check for missing commas, brackets, or quotes
2. **Images Not Loading**: Verify image URLs are accessible
3. **Categories Not Working**: Ensure you're using predefined categories
4. **Dates Not Sorting**: Use YYYY-MM-DD format consistently

### File Locations Quick Reference:

- **Main Events**: `src/data/eventsData.ts`
- **Blog Posts**: `src/data/blogData.ts`
- **Components**: `src/components/` (no need to edit these)

**🎉 Content management made simple - just edit data files and deploy!**
