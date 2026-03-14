import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForumScreen() {
  const forumPosts = [
    {
      id: 1,
      title: 'Kinh nghiệm trồng rau sạch tại nhà',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước',
      replies: 15,
      likes: 23,
    },
    {
      id: 2,
      title: 'Cách bảo quản rau củ tươi lâu',
      author: 'Trần Thị B',
      time: '5 giờ trước',
      replies: 8,
      likes: 12,
    },
    {
      id: 3,
      title: 'Chia sẻ nguồn rau sạch giá tốt',
      author: 'Lê Văn C',
      time: '1 ngày trước',
      replies: 25,
      likes: 45,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Diễn đàn Vego</Text>
        <TouchableOpacity style={styles.newPostButton}>
          <Text style={styles.newPostText}>+ Tạo bài viết</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {forumPosts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.postCard}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postAuthor}>Bởi {post.author}</Text>
            <View style={styles.postStats}>
              <Text style={styles.statText}>💬 {post.replies} phản hồi</Text>
              <Text style={styles.statText}>❤️ {post.likes} thích</Text>
              <Text style={styles.postTime}>{post.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  newPostButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  newPostText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  postAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#999',
  },
  postTime: {
    fontSize: 12,
    color: '#999',
  },
});