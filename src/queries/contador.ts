import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTimer, updateTimer } from '@/services/contador'

export const getTimerQuery = queryOptions({
    queryKey: ['Timer'],
    queryFn: () => getTimer(),
    staleTime: Infinity
})

export const updateTimerQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['updateTimer'],
        mutationFn: async () => {
            return updateTimer();
        },
        onSuccess: () => {
            console.log('Timer updated')
            queryClient.invalidateQueries(getTimerQuery);
        }
    })
}
