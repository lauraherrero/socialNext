import { Route, Routes } from 'react-router';
import { UserDetail } from '../pages/UserDetailPage';
import { UserList } from '../components/UserList';
import { SearchPage } from '../pages/SearchPage';


export const AppRouter = () => {

  return (
    <Routes>

      <Route path='/' element={<UserList />} />
      <Route path="users/:id" element={<UserDetail />} />
      <Route path='search' element={<SearchPage />} />

    </Routes>
  )
}
