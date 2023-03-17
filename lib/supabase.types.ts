export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      poll_questions: {
        Row: {
          content: string;
          created_at: string;
          pollId: string;
          uid: string;
        };
        Insert: {
          content?: string;
          created_at?: string;
          pollId: string;
          uid: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          pollId?: string;
          uid?: string;
        };
      };
      polls: {
        Row: {
          author: string;
          created_at: string;
          id: string;
          pollcode: string | null;
          title: string;
        };
        Insert: {
          author: string;
          created_at?: string;
          id: string;
          pollcode?: string | null;
          title?: string;
        };
        Update: {
          author?: string;
          created_at?: string;
          id?: string;
          pollcode?: string | null;
          title?: string;
        };
      };
      question_responses: {
        Row: {
          created_at: string;
          question_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          question_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          question_id?: string;
          user_id?: string;
        };
      };
      Users: {
        Row: {
          auth_id: string;
          created_at: string | null;
          name: string | null;
          uid: string;
        };
        Insert: {
          auth_id: string;
          created_at?: string | null;
          name?: string | null;
          uid: string;
        };
        Update: {
          auth_id?: string;
          created_at?: string | null;
          name?: string | null;
          uid?: string;
        };
      };
      yearbooks: {
        Row: {
          created_at: string;
          id: string;
          owner: string;
          thumbnail_url: string | null;
          title: string;
        };
        Insert: {
          created_at?: string;
          id: string;
          owner: string;
          thumbnail_url?: string | null;
          title: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          owner?: string;
          thumbnail_url?: string | null;
          title?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
