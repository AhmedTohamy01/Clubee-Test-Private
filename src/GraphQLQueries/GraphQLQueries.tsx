import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query ($filter: String!, $limit: ID!) {
    posts(filter: $filter, limit: $limit) {
      id
      name
      email
      title
      description
      createdAt
    }
  }
`

export const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      name
      email
      title
      description
    }
  }
`

export const ADD_POST = gql`
  mutation (
    $name: String!
    $email: String!
    $title: String!
    $description: String!
  ) {
    addPost(
      name: $name
      email: $email
      title: $title
      description: $description
    ) {
      id
      name
      email
      title
      description
    }
  }
`

export const UPDATE_POST = gql`
  mutation (
    $id: ID!
    $name: String!
    $email: String!
    $title: String!
    $description: String!
  ) {
    updatePost(
      id: $id
      name: $name
      email: $email
      title: $title
      description: $description
    ) {
      id
      name
      email
      title
      description
    }
  }
`

export const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id) {
      id
      name
      email
      title
      description
    }
  }
`
