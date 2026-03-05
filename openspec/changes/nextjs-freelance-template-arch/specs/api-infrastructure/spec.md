## ADDED Requirements

### Requirement: Typed fetch wrapper
The template SHALL provide a typed API client at `lib/api-client.ts` that wraps native `fetch` with automatic JSON parsing, type-safe request/response handling, and error normalization.

#### Scenario: Successful API call with type safety
- **WHEN** a developer calls `apiClient.get<User>('/api/users/1')`
- **THEN** the response SHALL be typed as `User` and automatically parsed from JSON

#### Scenario: Token injection
- **WHEN** an API request is made while an auth token exists in storage
- **THEN** the API client SHALL automatically attach the token as a `Bearer` authorization header

#### Scenario: API error normalization
- **WHEN** an API call returns a non-2xx status code
- **THEN** the API client SHALL throw a typed `ApiError` with `status`, `message`, and optional `errors` fields

### Requirement: TanStack Query provider setup
The template SHALL configure a TanStack Query `QueryClientProvider` in `providers/query-provider.tsx` with sensible defaults for staleTime, retry, and refetchOnWindowFocus.

#### Scenario: Query provider wraps application
- **WHEN** the application loads
- **THEN** all components SHALL have access to TanStack Query hooks (`useQuery`, `useMutation`)

#### Scenario: React Query Devtools in development
- **WHEN** the application runs in development mode
- **THEN** TanStack Query Devtools SHALL be available for debugging query states

### Requirement: Shared Zod validation schemas
The template SHALL provide a `lib/validations.ts` file with reusable Zod schemas for common data patterns (email, password, phone, URL).

#### Scenario: Schema reuse across client and server
- **WHEN** a Zod schema is defined in `lib/validations.ts`
- **THEN** it SHALL be importable in both client components (form validation) and API route handlers (request validation)

#### Scenario: Type inference from schemas
- **WHEN** a Zod schema is defined
- **THEN** its TypeScript type SHALL be inferrable via `z.infer<typeof schema>` without manual type duplication
