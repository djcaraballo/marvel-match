import React from 'react'
import * as API from './'

describe('API', () => {
  it('should call fetch with the correct params', async () => {
    const mockUrl = 'someUrl.com'
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve()
      })
    )
    await API.fetchInfo(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it.only('should throw an error if fetch call fails', async () => {
    const mockUrl = 'someUrl.com'
    const expected = Error('Too bad your fetch failed, chump!')
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('Too bad your fetch failed, chump!')))
    await expect(API.fetchInfo(mockUrl)).rejects.toEqual(expected)
  })
})
