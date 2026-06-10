export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          clerk_user_id: string;
          email: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          clerk_user_id: string;
          email: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          clerk_user_id?: string;
          email?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      guides: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string | null;
          published_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          published_at?: string | null;
          created_at?: string;
        };
        Update: {
          slug?: string;
          title?: string;
          description?: string | null;
          published_at?: string | null;
        };
        Relationships: [];
      };
      affiliate_links: {
        Row: {
          id: string;
          code: string;
          name: string;
          destination_url: string;
          category: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          name: string;
          destination_url: string;
          category: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          destination_url?: string;
          category?: string;
        };
        Relationships: [];
      };
      purchases: {
        Row: {
          id: string;
          clerk_user_id: string;
          stripe_session_id: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          clerk_user_id: string;
          stripe_session_id: string;
          email: string;
          created_at?: string;
        };
        Update: Record<string, never>;
        Relationships: [];
      };
      affiliate_clicks: {
        Row: {
          id: string;
          code: string;
          user_id: string | null;
          ip_hash: string | null;
          referer: string | null;
          user_agent: string | null;
          clicked_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          user_id?: string | null;
          ip_hash?: string | null;
          referer?: string | null;
          user_agent?: string | null;
          clicked_at?: string;
        };
        Update: Record<string, never>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
